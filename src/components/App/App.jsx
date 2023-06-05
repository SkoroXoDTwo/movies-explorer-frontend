import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route
          path="/movies"
          element={
            <ProtectedRoute
              Component={<Movies />}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              Component={<SavedMovies />}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              Component={<Profile />}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
