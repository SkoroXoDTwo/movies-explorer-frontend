import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from '../../utils/MainApi';
import { DEFAULT_ERROR, EDIT_PROFILE_ERRORS_OBJ, LOGIN_ERRORS_OBJ, REGISTER_ERRORS_OBJ } from '../../utils/constants';

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      checkToken(jwt);
      mainApi
        .getMovies({ jwt })
        .then((movies) => {
          setSavedMovies(movies.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  const checkToken = (jwt) => {
    mainApi
      .checkToken(jwt)
      .then(({ data }) => {
        setCurrentUser({ name: data.name, email: data.email });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });

  }

  const handleRegister = ({ password, email, name, setErrorApi }) => {
    mainApi
      .postRegister(password, email, name)
      .then(({ data }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name: data.name, email: data.email });
        navigate('/movies');
      })
      .catch((err) => {
        setErrorApi({
          message: REGISTER_ERRORS_OBJ[err] ? REGISTER_ERRORS_OBJ[err] : DEFAULT_ERROR
        });
        console.log(err);
      })
  };

  const handleLogin = ({ password, email, setErrorApi }) => {
    mainApi
      .postLogin(password, email)
      .then((data) => {
        checkToken(data.token)
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token)
        navigate('/movies');
      })
      .catch((err) => {
        setErrorApi({
          message: LOGIN_ERRORS_OBJ[err] ? LOGIN_ERRORS_OBJ[err] : DEFAULT_ERROR
        });

        console.log(err);
      })
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleEditProfile = (name, email, setInfoMessage, setErrorApi) => {
    const jwt = localStorage.getItem("jwt");

    mainApi
      .patchProfile(name, email, jwt)
      .then(({ data }) => {
        setCurrentUser({ name: data.name, email: data.email });
        setInfoMessage('Данные успешно обновлены!')
      })
      .catch((err) => {
        setErrorApi({
          message: EDIT_PROFILE_ERRORS_OBJ[err] ? EDIT_PROFILE_ERRORS_OBJ[err] : DEFAULT_ERROR
        });

        console.log(err);
      });
  }

  const handlePutLikeCard = (data) => {
    mainApi.postMovie(
      {
        ...data,
        movieId: data.id,
        jwt: localStorage.getItem('jwt'),
        image: `https://api.nomoreparties.co${data.image.url}`,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
      }
    )
      .then((movie) => {
        setSavedMovies([...savedMovies, movie.data])
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDeleteLikeCard = (id, isSavedPageModeAcitve) => {
    const savedMovieId = isSavedPageModeAcitve ? id : savedMovies.find(movie => movie.movieId === id)._id;

    mainApi.deleteMovie({
      id: savedMovieId,
      jwt: localStorage.getItem('jwt'),
    })
      .then((deletedMovie) => {
        setSavedMovies(savedMovies.filter((movie) => movie._id !== deletedMovie.data._id));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                Component={Movies}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
                handlePutLikeCard={handlePutLikeCard}
                handleDeleteLikeCard={handleDeleteLikeCard}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                Component={SavedMovies}
                isLoggedIn={isLoggedIn}
                moviesItems={savedMovies}
                handleDeleteLikeCard={handleDeleteLikeCard}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                Component={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={handleSignOut}
                onEditProfile={handleEditProfile}
              />
            }
          />

          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
