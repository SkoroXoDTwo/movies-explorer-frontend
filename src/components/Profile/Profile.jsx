import './Profile.css';

import Header from '../Header/Header';
import { useState } from 'react';

function Profile() {
  const [isEditModeActivated, setIsEditModeActivated] = useState(false);

  return (
    <>
      <Header />
      <section className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>
            Привет, Виталий!
          </h1>
          <form className='profile__form'>
            <div className='profile__inputs'>
              <div className='profile__input-container'>
                <p className='profile__input-title'>
                  Имя
                </p>
                <input
                  className='profile__input'
                  placeholder='Введите имя'
                  disabled={!isEditModeActivated}
                />
              </div>
              <div className='profile__input-container'>
                <p className='profile__input-title'>
                  E-mail
                </p>
                <input
                  className='profile__input'
                  placeholder='Введите e-mail'
                  disabled={!isEditModeActivated}
                />
              </div>
            </div>
            {isEditModeActivated
              ?
              <button className='profile__save-btn' onClick={() => setIsEditModeActivated(false)} type="button">
                Сохранить
              </button>
              :
              <div className='profile__btns-container'>
                <button className='profile__edit-btn' onClick={() => setIsEditModeActivated(true)} type="button">
                  Редактировать
                </button>
                <button className='profile__logout-btn'>Выйти из аккаунта</button>
              </div>
            }
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
