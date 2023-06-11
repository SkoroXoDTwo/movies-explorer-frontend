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
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [isApiDataUploaded, setIsApiDataUploaded] = useState(false);
  const [errorApi, setErrorApi] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [isShotModeActive, setIsShotModeActive] = useState(false);

  useEffect(() => {
    const localStorageIsShotModeActive = JSON.parse(localStorage.getItem('is-shot-mode-active'));
    const localStorageItemFilteredMovies = JSON.parse(localStorage.getItem('filtered-movies')) || '';
    const localStorageItemMoviesSearchValue = JSON.parse(localStorage.getItem('movies-search-value')) || '';
    const localStorageItemMovies = JSON.parse(localStorage.getItem('movies'));

    setCards(localStorageItemMovies);
    setFilteredCards(localStorageItemFilteredMovies);
    setSearchValue(localStorageItemMoviesSearchValue);
    setIsShotModeActive(localStorageIsShotModeActive);
    setIsApiDataUploaded(localStorageItemMovies !== null)
  }, []);

  const setFilteredCardsArrayInAllStorage = (cards, searchValue) => {
    const filteredCardsArray = cards.filter(card => {
      return card.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        && (isShotModeActive ? card.duration < 41 : true);
    });

    localStorage.setItem('filtered-movies', JSON.stringify(filteredCardsArray));
    setFilteredCards(filteredCardsArray);
  }

  const apiUploadCards = (searchValue) => {
    setIsLoadingApi(true);

    moviesApi.getMovies()
      .then((cards) => {
        setFilteredCardsArrayInAllStorage(cards, searchValue);

        localStorage.setItem('movies', JSON.stringify(cards));
        setCards(cards);
      })
      .catch((err) => {
        setErrorApi(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoadingApi(false);
      });
  }

  const handleSearch = (e) => {
    e.preventDefault();

    setErrorApi(null);
    isApiDataUploaded ? setFilteredCardsArrayInAllStorage(cards, searchValue) : apiUploadCards(searchValue);

    localStorage.setItem('is-shot-mode-active', isShotModeActive);
    localStorage.setItem('movies-search-value', JSON.stringify(searchValue));
  }

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main>
        <SearchForm
          onSearch={handleSearch}
          value={searchValue}
          isShotModeActive={isShotModeActive}
          setIsShotModeActive={setIsShotModeActive}
          setValue={setSearchValue}
        />

        {
          errorApi
            ? <MessageContainer
              message="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            />
            : (isLoadingApi
              ? <Preloader />
              : !isApiDataUploaded
                ? <MessageContainer message="Введите запрос в поле поиска" />
                : filteredCards.length !== 0
                  ? <MoviesCardList moviesItems={filteredCards} />
                  : <MessageContainer message="Ничего не найдено" />)
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
