import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Login = ({ handleLogin, isLoggedIn, errorsApi }) => {
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn, navigate]);

  const onLogin = (e) => {
    e.preventDefault();
    handleLogin({ password: values.password, email: values.email })
  }

  return (
    <div className='login'>
      <header className='login__header'>
        <Link className='login__header-logo' to='/' />
      </header>
      <main className='login__main'>
        <h1 className='login__title'>
          Рады видеть!
        </h1>
        <form className='login__container' onSubmit={onLogin}>
          <div className='login__inputs'>
            <div className='login__input-container'>
              <p className='login__input-title'>
                E-mail
              </p>
              <input
                className='login__input'
                type="email"
                name="email"
                placeholder='Введите email'
                onChange={handleChange}
                value={values.email || ''}
                required
              />
              <p className={`login__input-error ${errors.email && 'login__input-error_visible'}`}>
                {errors.email}
              </p>
            </div>
            <div className='login__input-container'>
              <p className='login__input-title'>
                Пароль
              </p>
              <input
                className='login__input'
                type='password'
                name="password"
                placeholder='Введите пароль'
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              <p className={`login__input-error ${errors.password ? 'login__input-error_visible' : ''}`}>
                {errors.password}
              </p>
            </div>
          </div>
          <div className='login__btns'>
            <p className='login__err-message'>
              {errorsApi.message}
            </p>
            <button
              className={`login__btn-auth ${!isValid ? 'login__btn-auth_disabled' : ''}`}
              disabled={!isValid}
            >
              Войти
            </button>
            <div className='login__footer-link-container'>
              <p className='login__footer-link-text'>
                Ещё не зарегистрированы?
              </p>
              <Link to="/signup" className='login__footer-link'>Регистрация</Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
