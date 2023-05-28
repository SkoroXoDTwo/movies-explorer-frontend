import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { moviesItems } from '../../data/moviesData';

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList moviesItems={moviesItems} isSaved={false} />
      <Footer />
    </>
  );
}

export default Movies;
