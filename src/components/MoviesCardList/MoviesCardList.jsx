import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesItems, isSaved }) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__items'>
          {moviesItems.map(card => (
            <li key={card.id}>
              <MoviesCard
                title={card.title}
                imgLink={card.imgLink}
                isSaved={isSaved}
                isShort={card.isShort}
              />
            </li>
          ))}
        </ul>

        <button className='movies-card-list__btn-more'>ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
