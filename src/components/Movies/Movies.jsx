import './Movies.css';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import MessageContainer from '../MessageContainer/MessageContainer';
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const localStorageItemFilteredMovies = JSON.parse(localStorage.getItem('filtered-movies')) || '';
  const localStorageItemMoviesSearchValue = JSON.parse(localStorage.getItem('movies-search-value')) || '';
  const localStorageItemMovies = JSON.parse(localStorage.getItem('movies'));

  const isApiDataUploaded = localStorageItemMovies !== null;

  const [cards, setCards] = useState(localStorageItemMovies);
  const [filteredCards, setFilteredCards] = useState(localStorageItemFilteredMovies);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  const handleSearch = (e, value) => {
    e.preventDefault();

    let filteredCardsArray = [];

    if (!localStorageItemMovies) {
      setIsLoadingApi(true);

      moviesApi.getMovies()
        .then((cards) => {
          filteredCardsArray = cards.filter(card => card.nameRU.toLowerCase().includes(value.toLowerCase()));
          localStorage.setItem('filtered-movies', JSON.stringify(filteredCardsArray));
          setFilteredCards(filteredCardsArray);

          localStorage.setItem('movies', JSON.stringify(cards));
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoadingApi(false);
        });
    }
    else {
      filteredCardsArray = cards.filter(card => card.nameRU.toLowerCase().includes(value.toLowerCase()));
      localStorage.setItem('filtered-movies', JSON.stringify(filteredCardsArray));
      setFilteredCards(filteredCardsArray);
      console.log(cards)
    }

    localStorage.setItem('movies-search-value', JSON.stringify(value));
  }

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main>
        <SearchForm onSearch={handleSearch} valueInit={localStorageItemMoviesSearchValue} />

        {
          isLoadingApi
            ? <Preloader />
            : !isApiDataUploaded
              ? <MessageContainer message="Введите запрос в поле поиска" />
              : filteredCards.length !== 0
                ? <MoviesCardList moviesItems={filteredCards} />
                : <MessageContainer message="Ничего не найдено" />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
