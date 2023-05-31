import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='login'>
      <header className='login__header'>
        <Link className='login__header-logo' to='/' />
      </header>
      <main className='login__main'>
        <h1 className='login__title'>
          Рады видеть!
        </h1>
        <div className='login__container'>
          <div className='login__inputs'>
            <div className='login__input-container'>
              <p className='login__input-title'>
                E-mail
              </p>
              <input className='login__input' type="email" required />
              <p className='login__input-error'>Что-то пошло не так...</p>
            </div>
            <div className='login__input-container'>
              <p className='login__input-title'>
                Пароль
              </p>
              <input className='login__input' type='password' required />
              <p className='login__input-error login__input-error_visible'>Что-то пошло не так...</p>
            </div>
          </div>
          <div className='login__btns'>
            <button className='login__btn-auth'>Войти</button>
            <div className='login__footer-link-container'>
              <p className='login__footer-link-text'>
                Ещё не зарегистрированы?
              </p>
              <Link to="signup" className='login__footer-link'>Регистрация</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
