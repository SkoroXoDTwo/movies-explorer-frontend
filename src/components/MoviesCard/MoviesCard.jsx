import './MoviesCard.css';
import mainApi from '../../utils/MainApi';
import { useState } from 'react';

const MoviesCard = ({ title, imgLink, isSaved, isLike, duration, data, onPutLike, onDeleteLikeCard }) => {
  const durationHour = Math.floor(duration / 60);
  const durationMinute = duration % 60;
  const durationString = `${durationHour ? durationHour + 'ч' : ''}${durationMinute ? durationMinute + 'м' : ''}`

  const toggleLikeCard = () => {
    isLike ? onDeleteLikeCard(data.id) : onPutLike(data);
  }

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
            <button className="movies-card__btn-delete" />
            :
            <div
              className={`movies-card__indicator ${isLike ? 'movies-card__indicator_active' : ''}`}
              onClick={toggleLikeCard}
            />
          }
        </div>
        <div className='movies-card__row'>
          <p className='movies-card__time'>
            {durationString}
          </p>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;
