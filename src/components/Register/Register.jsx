import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Register = ({ handleRegister, isLoggedIn }) => {
  const navigate = useNavigate();

  const [errorApi, setErrorApi] = useState({});

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn, navigate]);

  const onRegister = (e) => {
    e.preventDefault();
    handleRegister({ password: values.password, email: values.email, name: values.name, setErrorApi })
  }

  return (
    <div className='register'>
      <header className='register__header'>
        <Link className='register__header-logo' to='/' />
      </header>
      <main className='register__main'>
        <h1 className='register__title'>
          Добро пожаловать!
        </h1>
        <form className='register__container' onSubmit={onRegister}>
          <div className='register__inputs'>
            <div className='register__input-container'>
              <p className='register__input-title'>
                Имя
              </p>
              <input
                className='register__input'
                name="name"
                placeholder='Введите имя'
                onChange={handleChange}
                value={values.name}
                minLength="2"
                maxLength="30"
                required
              />
              <p className={`register__input-error ${errors.name ? 'register__input-error_visible' : ''}`}>
                {errors.name}
              </p>
            </div>
            <div className='register__input-container'>
              <p className='register__input-title'>
                E-mail
              </p>
              <input
                className='register__input'
                type="email"
                name="email"
                placeholder='Введите email'
                onChange={handleChange}
                value={values.email}
                required
              />
              <p className={`register__input-error ${errors.email ? 'register__input-error_visible' : ''}`}>
                {errors.email}
              </p>
            </div>
            <div className='register__input-container'>
              <p className='register__input-title'>
                Пароль
              </p>
              <input
                className='register__input'
                type='password'
                name="password"
                placeholder='Введите пароль'
                onChange={handleChange}
                value={values.password}
                required
              />
              <p className={`register__input-error ${errors.password ? 'register__input-error_visible' : ''}`}>
                {errors.password}
              </p>
            </div>
          </div>
          <div className='register__btns'>
            <p className={`register__err-message ${errorApi.message ? 'register__err-message_visible' : ''}`}>
              {errorApi.message}
            </p>
            <button
              className={`register__btn-auth ${!isValid ? 'register__btn-auth_disabled' : ''}`}
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
            <div className='register__footer-link-container'>
              <p className='register__footer-link-text'>
                Уже зарегистрированы?
              </p>
              <Link to="/signin" className='register__footer-link'>Войти</Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
