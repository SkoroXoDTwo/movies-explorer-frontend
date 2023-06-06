import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesItems, isSaved, isLoadingApi }) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {!isLoadingApi
          ?
          <>
            <ul className='movies-card-list__items'>
              {
                moviesItems.map(movie => (
                  <li key={movie.id}>
                    <MoviesCard
                      title={movie.nameRU}
                      imgLink={`https://api.nomoreparties.co${movie.image.url}`}
                      isSaved={isSaved}
                      isLike={movie.isLike}
                      duration={movie.duration}
                    />
                  </li>))
              }
            </ul>
            <button className='movies-card-list__btn-more'>ещё</button>
          </>

          : <Preloader />
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
