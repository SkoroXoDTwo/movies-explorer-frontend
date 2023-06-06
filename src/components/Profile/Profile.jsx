import './Profile.css';

import Header from '../Header/Header';
import { useState } from 'react';

function Profile({ onSignOut }) {
  const [isEditModeActivated, setIsEditModeActivated] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>
            Привет, Виталий!
          </h1>
          <form className='profile__form'>
            <div className='profile__inputs'>
              <div className={`profile__input-container ${isInputFocus ? 'profile__input-container_focus' : ''}`}>
                <p className='profile__input-title'>
                  Имя
                </p>
                <input
                  className='profile__input'
                  placeholder='Введите имя'
                  disabled={!isEditModeActivated}
                  onFocus={() => { setIsInputFocus(true) }}
                  onBlur={() => { setIsInputFocus(false) }}
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className='profile__input-focus-border' />
              </div>
              <div className='profile__input-container'>
                <p className='profile__input-title'>
                  E-mail
                </p>
                <input
                  className='profile__input'
                  placeholder='Введите e-mail'
                  disabled={!isEditModeActivated}
                  onFocus={() => { setIsInputFocus(true) }}
                  onBlur={() => { setIsInputFocus(false) }}
                  type="email"
                  required
                />
              </div>
            </div>
            <div className='profile__btns-container'>
              {isEditModeActivated
                ?
                <>
                  <button className='profile__save-btn' onClick={() => setIsEditModeActivated(false)} type="button">
                    Сохранить
                  </button>
                  <p className='profile__error-msg'>При обновлении профиля произошла ошибка.</p>
                </>
                :
                <>
                  <button className='profile__edit-btn' onClick={() => setIsEditModeActivated(true)} type="button">
                    Редактировать
                  </button>
                  <button className='profile__logout-btn' type="button" onClick={onSignOut}>Выйти из аккаунта</button>
                </>
              }
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
