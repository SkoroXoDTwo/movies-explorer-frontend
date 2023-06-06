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

  return (
    <div className="page">
      <Routes>
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              Component={Movies}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              Component={SavedMovies}
              isLoggedIn={isLoggedIn}
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
