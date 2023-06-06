import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { moviesItems } from '../../data/moviesData';
import { useEffect, useState } from 'react';
import MessageContainer from '../MessageContainer/MessageContainer';
import moviesApi from '../../utils/MoviesApi';

const Movies = () => {
  const localStorageItemFilteredMovies = JSON.parse(localStorage.getItem('filtered-movies'));

  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [errorApi, setErrorApi] = useState(false);

  console.log(filteredCards.length)

  useEffect(() => {

    const localStorageItemMovies = JSON.parse(localStorage.getItem('movies'));

    if(localStorageItemFilteredMovies) {
      setFilteredCards(localStorageItemFilteredMovies);
    }

    if (localStorageItemMovies) {
      setCards(localStorageItemMovies);
    }
    else {
      moviesApi.getMovies()
        .then((data) => {
          localStorage.setItem('movies', JSON.stringify(data));
          setCards(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoadingApi(false);
        });
    }
  }, [])

  const handleSearch = (e, value) => {
    e.preventDefault();
    const filteredCardsArray = cards.filter(card => card.nameRU.toLowerCase().includes(value.toLowerCase()));

    localStorage.setItem('filtered-movies', JSON.stringify(filteredCardsArray));
    setFilteredCards(filteredCardsArray);
  }

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main>
        <SearchForm onSearch={handleSearch} />

        {localStorageItemFilteredMovies && localStorageItemFilteredMovies.length !== 0
          ? <MoviesCardList moviesItems={filteredCards} isSaved={false} isLoadingApi={isLoadingApi} />
          : <MessageContainer message="Введите запрос в поле поиска" />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
