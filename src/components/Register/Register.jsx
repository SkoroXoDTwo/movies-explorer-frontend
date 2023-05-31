import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className='register'>
      <header className='register__header'>
        <Link className='register__header-logo' to='/' />
      </header>
      <main className='register__main'>
        <h1 className='register__title'>
          Добро пожаловать!
        </h1>
        <div className='register__container'>
          <div className='register__inputs'>
            <div className='register__input-container'>
              <p className='register__input-title'>
                Имя
              </p>
              <input className='register__input' required minLength="2" maxLength="2" />
              <p className='register__input-error'>Что-то пошло не так...</p>
            </div>
            <div className='register__input-container'>
              <p className='register__input-title'>
                E-mail
              </p>
              <input className='register__input' type="email" required />
              <p className='register__input-error'>Что-то пошло не так...</p>
            </div>
            <div className='register__input-container'>
              <p className='register__input-title'>
                Пароль
              </p>
              <input className='register__input register__input_error' type='password' required />
              <p className='register__input-error register__input-error_visible'>Что-то пошло не так...</p>
            </div>
          </div>
          <div className='register__btns'>
            <button className='register__btn-auth'>Зарегистрироваться</button>
            <div className='register__footer-link-container'>
              <p className='register__footer-link-text'>
                Уже зарегистрированы?
              </p>
              <Link to="/signin" className='register__footer-link'>Войти</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
