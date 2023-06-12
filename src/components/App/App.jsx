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

import mainApi from '../../utils/MainApi';

const App = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });

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

  const handleRegister = ({ password, email, name }) => {
    mainApi
      .postRegister(password, email, name)
      .then((_) => {
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {

      });
  };

  const handleLogin = ({ password, email }) => {
    mainApi
      .postLogin(password, email)
      .then((data) => {
        setIsLoggedIn(true);
        navigate('/movies');
        localStorage.setItem('jwt', data.token)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {

      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/signin");
  };

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
            />
          }
        />

        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Register handleRegister={handleRegister} isLoggedIn={isLoggedIn} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
