import './SavedMovies.css';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import MessageContainer from '../MessageContainer/MessageContainer';

import { SAVED_MOVIES_NOT_DATA } from '../../utils/constants';

const SavedMovies = ({ moviesItems, handleDeleteLikeCard, uploadSavedMoviesFromApi }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isShotModeActive, setIsShotModeActive] = useState(false);
  const [filteredCards, setFilteredCards] = useState(moviesItems);

  useEffect(() => {
    uploadSavedMoviesFromApi();
  }, []);

  useEffect(() => {
    const filteredCardsArray = moviesItems.filter(card => {
      return card.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        && (isShotModeActive ? card.duration < 41 : true);
    });

    setFilteredCards(filteredCardsArray);
  }, [moviesItems]);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredCardsArray = moviesItems.filter(card => {
      return card.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        && (isShotModeActive ? card.duration < 41 : true);
    });

    setFilteredCards(filteredCardsArray);
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
          filteredCards.length === 0 ?
            <MessageContainer message={SAVED_MOVIES_NOT_DATA} /> :
            <MoviesCardList
              moviesItems={filteredCards}
              isSavedPageModeActive={true}
              savedMovies={moviesItems}
              handleDeleteLikeCard={handleDeleteLikeCard}
              isHaveBtnMore={false}
            />
        }

      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
