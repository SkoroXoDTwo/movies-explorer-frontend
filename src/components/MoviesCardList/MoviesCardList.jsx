import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesItems, isSaved }) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__items'>
          {moviesItems
            ? moviesItems.map(card => (
              <li key={card.id}>
                <MoviesCard
                  title={card.title}
                  imgLink={card.imgLink}
                  isSaved={isSaved}
                  isShort={card.isShort}
                />
              </li>
            ))
            : [...Array(3)].map((_, i) => (
              <li key={i}>
                <Preloader />
              </li>
            ))
          }
        </ul>

        <button className='movies-card-list__btn-more'>ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
