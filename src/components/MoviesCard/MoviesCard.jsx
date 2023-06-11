import './MoviesCard.css';
import mainApi from '../../utils/MainApi';
import { useState } from 'react';

const MoviesCard = ({ title, imgLink, isSaved, isLike = false, duration, data }) => {
  const durationHour = Math.floor(duration / 60);
  const durationMinute = duration % 60;
  const durationString = `${durationHour ? durationHour + 'ч' : ''}${durationMinute ? durationMinute + 'м' : ''}`
  const [isLikeState, setIsLikeState] = useState(isLike);
  console.log(data);

  const handleLike = () => {
    if (isLikeState) {

    }
    else {
      mainApi.postMovies(
        {
          ...data,
          movieId: data.id,
          jwt: localStorage.getItem('jwt'),
          image: `https://api.nomoreparties.co${data.image.url}`,
          thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        }
      )
        .then(() => {
          setIsLikeState(true);
          console.log('успешно')
        })
        .catch((err) => {
          console.log(err);
        })
    }
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
              className={`movies-card__indicator ${isLikeState ? 'movies-card__indicator_active' : ''}`}
              onClick={handleLike}
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
