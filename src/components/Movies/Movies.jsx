import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { moviesItems } from '../../data/moviesData';

function Movies() {
  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main>
        <SearchForm />
        <MoviesCardList moviesItems={moviesItems} isSaved={false} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
