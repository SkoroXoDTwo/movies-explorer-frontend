import './MoviesCard.css';

function MoviesCard({ title, imgLink, isSaved, isLike }) {
  return (
    <article className='movies-card'>
      <img className='movies-card__img' src={imgLink} alt={title} />
      <div className='movies-card__cover'>
        <div className='movies-card__row'>
          <h2 className='movies-card__title'>
            {title}
          </h2>
          {isSaved
            ?
            <button class="movies-card__btn-delete" />
            :
            <div class={`movies-card__indicator ${isLike ? 'movies-card__indicator_active' : ''}`} />
          }
        </div>
        <div className='movies-card__row'>
          <p className='movies-card__time'>
            1ч42м
          </p>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;
