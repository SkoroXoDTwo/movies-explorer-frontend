import './Profile.css';
import { useState, useContext, useEffect } from 'react';

import Header from '../Header/Header';

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Profile = ({ onSignOut, onEditProfile }) => {
  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();

  const [isEditModeActivated, setIsEditModeActivated] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [errorApi, setErrorApi] = useState({});

  const currentUser = useContext(CurrentUserContext);

  const isNameEdited = currentUser.name !== values.name;
  const isEmailEdited = currentUser.email !== values.email
  const isValueEdited = isNameEdited || isEmailEdited;

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [])

  const handleSubmit = () => {
    let data = {};

    if(isNameEdited) {
      data.name = values.name
    }
    if(isEmailEdited) {
      data.email = values.email
    }

    setIsEditModeActivated(false)
    onEditProfile(data, setInfoMessage, setErrorApi);
  }

  const onClickBtnEditModeActive = () => {
    setInfoMessage('');
    setErrorApi({});
    setIsEditModeActivated(true)
  }

  return (
    <>
      <Header isAuth={true} backgroundColor="#202020" />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>
            Привет, {currentUser.name}!
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
                  name="name"
                  onChange={handleChange}
                  value={values.name || currentUser.name}
                  required
                />
                <p className={`profile__input-err ${errors.name ? 'profile__input-err_visible' : ''}`}>
                  {errors.name}
                </p>
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
                  name="email"
                  onChange={handleChange}
                  value={values.email || ''}
                  pattern="\S+@\S+\.\S+"
                  required
                />
                <p
                  className={`profile__input-err profile__input-err_bottom ${errors.email ? 'profile__input-err_visible' : ''}`}
                >
                  {errors.email}
                </p>
              </div>
            </div>
            <div className='profile__btns-container'>
              {isEditModeActivated
                ?
                <>
                  <button
                    className={`profile__save-btn ${!isValid || !isValueEdited ? 'profile__save-btn_disabled' : ''}`}
                    onClick={handleSubmit}
                    type="button"
                    disabled={!isValid || !isValueEdited}
                  >
                    Сохранить
                  </button>
                </>
                :
                <>
                  <p className={`profile__error-msg ${errorApi.message ? 'profile__error-msg_visible' : ''}`}>
                    {errorApi.message}
                  </p>
                  <p className={`profile__info-message ${infoMessage ? 'profile__info-message_visible' : ''}`}>
                    {infoMessage}
                  </p>
                  <button className='profile__edit-btn' onClick={onClickBtnEditModeActive} type="button">
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
