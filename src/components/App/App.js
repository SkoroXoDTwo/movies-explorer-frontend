import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="/profile" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Profile />} />
    </Routes>
  );
}

export default App;
