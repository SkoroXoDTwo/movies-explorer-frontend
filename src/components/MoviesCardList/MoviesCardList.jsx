import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

const MoviesCardList = ({
  moviesItems,
  isSavedPageModeActive,
  handlePutLikeCard = null,
  handleDeleteLikeCard = null,
  savedMovies,
  isHaveBtnMore
}) => {
  const [countAdditionalCards, setMaxCountCards] = useState(0);
  const [initCountCards, setInitCountCards] = useState(0);
  const [factor, setFactor] = useState(0);

  const countRow = Math.ceil((initCountCards + countAdditionalCards) / factor);
  const maxCountCards = countRow * factor;
  const moviesItemsRendered = isHaveBtnMore ? moviesItems.slice(0, maxCountCards) : moviesItems;

  useEffect(() => {
    const handleResizeListener = () => {
      handleResize(setFactor, [4, 3, 2, 2]);
    }

    handleResize(setInitCountCards, [16, 12, 8, 4]);
    handleResize(setFactor, [4, 3, 2, 2]);

    window.addEventListener('resize', handleResizeListener);

    return () => {
      window.removeEventListener('resize', handleResizeListener);
    };
  }, []);

  const handleResize = (func, params) => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1279) {
      func(params[0]);
    }
    if (screenWidth > 1024 && screenWidth < 1280) {
      func(params[1]);
    }
    if (screenWidth > 767 && screenWidth < 1025) {
      func(params[2]);
    }
    if (screenWidth < 768) {
      func(params[3]);
    }

  };

  const isLikedCard = (movieId) => {
    return savedMovies.find(movie => movie.movieId === movieId);
  }

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <>
          <ul className='movies-card-list__items'>
            {
              moviesItemsRendered.map(movie => (
                <li key={isSavedPageModeActive ? movie._id : movie.id}>
                  <MoviesCard
                    isSavedPageModeActive={isSavedPageModeActive}
                    isLiked={isLikedCard(movie.id)}
                    data={movie}
                    onPutLike={handlePutLikeCard}
                    onDeleteLikeCard={handleDeleteLikeCard}
                  />
                </li>))
            }
          </ul>
          {
            isHaveBtnMore &&
            moviesItems.length > maxCountCards &&
            <button
              className='movies-card-list__btn-more'
              onClick={() => { setMaxCountCards(countAdditionalCards + factor) }}
            >
              ещё
            </button>
          }
        </>
      </div>
    </section>
  );
}

export default MoviesCardList;
