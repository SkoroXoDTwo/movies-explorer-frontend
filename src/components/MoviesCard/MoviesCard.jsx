import './MoviesCard.css';

const MoviesCard = ({ data, isSavedPageModeActive, isLiked, onPutLike, onDeleteLikeCard }) => {
  const title = data.nameRU;
  const imgLink = isSavedPageModeActive ? data.image : `https://api.nomoreparties.co${data.image.url}`;
  const duration = data.duration;
  const moviedId = isSavedPageModeActive ? data._id : data.id;
  const trailerLink = data.trailerLink;

  console.log(data);

  const getDurationString = (duration) => {
    const durationHour = Math.floor(duration / 60);
    const durationMinute = duration % 60;
    const durationString = `${durationHour ? durationHour + 'ч' : ''}${durationMinute ? durationMinute + 'м' : ''}`

    return durationString;
  }

  const toggleLikeCard = () => {
    isLiked ? onDeleteLikeCard(moviedId, isSavedPageModeActive) : onPutLike(data);
  }

  return (
    <article className='movies-card'>
      <a className='movies-card__link' href={trailerLink} target="_blank" rel="noreferrer">
        <img className='movies-card__img' src={imgLink} alt={title} />
      </a>
      <div className='movies-card__cover'>
        <div className='movies-card__row'>
          <h2 className='movies-card__title'>
            {title}
          </h2>
          {isSavedPageModeActive
            ?
            <button className="movies-card__btn-delete" onClick={() => onDeleteLikeCard(moviedId, isSavedPageModeActive)} />
            :
            <div
              className={`movies-card__indicator ${isLiked ? 'movies-card__indicator_active' : ''}`}
              onClick={toggleLikeCard}
            />
          }
        </div>
        <div className='movies-card__row'>
          <p className='movies-card__time'>
            {getDurationString(duration)}
          </p>
        </div>
      </div>

    </article>
  );
}

export default MoviesCard;
