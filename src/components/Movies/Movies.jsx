import './Movies.css';
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import MessageContainer from '../MessageContainer/MessageContainer';

import moviesApi from '../../utils/MoviesApi';

import { ENTER_VALUE_IN_SEARCH, MOVIES_NOT_DATA, SERVER_MOVIES_ERROR } from '../../utils/constants';

const Movies = ({ handlePutLikeCard, handleDeleteLikeCard, savedMovies, uploadSavedMoviesFromApi }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [isApiDataUploaded, setIsApiDataUploaded] = useState(false);
  const [errorApi, setErrorApi] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [isShotModeActive, setIsShotModeActive] = useState(false);

  useEffect(() => {
    const localStorageIsShotModeActive = JSON.parse(localStorage.getItem('is-shot-mode-active')) || false;
    const localStorageItemFilteredMovies = JSON.parse(localStorage.getItem('filtered-movies')) || [];
    const localStorageItemMoviesSearchValue = JSON.parse(localStorage.getItem('movies-search-value')) || '';
    const localStorageItemMovies = JSON.parse(localStorage.getItem('movies'));

    setCards(localStorageItemMovies);
    setFilteredCards(localStorageItemFilteredMovies);
    setSearchValue(localStorageItemMoviesSearchValue);
    setIsShotModeActive(localStorageIsShotModeActive);
    setIsApiDataUploaded(localStorageItemMovies !== null)

    uploadSavedMoviesFromApi();
  }, []);

  const setFilteredCardsArrayInLocalStorage = (cards, searchValue) => {
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
        setFilteredCardsArrayInLocalStorage(cards, searchValue);
        setIsApiDataUploaded(true);

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
    isApiDataUploaded ? setFilteredCardsArrayInLocalStorage(cards, searchValue) : apiUploadCards(searchValue);

    localStorage.setItem('is-shot-mode-active', isShotModeActive);
    localStorage.setItem('movies-search-value', JSON.stringify(searchValue));
  }

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main>
        <SearchForm
          onSearch={handleSearch}
          isShotModeActive={isShotModeActive}
          setIsShotModeActive={setIsShotModeActive}
          value={searchValue}
          setValue={setSearchValue}
        />

        {
          errorApi
            ? <MessageContainer
              message={SERVER_MOVIES_ERROR}
            />
            : (isLoadingApi
              ? <Preloader />
              : !isApiDataUploaded
                ? <MessageContainer message={ENTER_VALUE_IN_SEARCH} />
                : filteredCards.length !== 0
                  ? <MoviesCardList
                    isSavedPageModeActive={false}
                    moviesItems={filteredCards}
                    handlePutLikeCard={handlePutLikeCard}
                    handleDeleteLikeCard={handleDeleteLikeCard}
                    savedMovies={savedMovies}
                    isHaveBtnMore={true}
                  />
                  : <MessageContainer message={MOVIES_NOT_DATA} />)
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
