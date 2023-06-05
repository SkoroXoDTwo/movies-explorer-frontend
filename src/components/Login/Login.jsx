import { Link, useNavigate, useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ handleLogin, isLoggedIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      const { from } = location.state || { from: { pathname: "/movies" } };
      navigate(from, { replace: true });
    }

    // if (isLoggedIn) {
    //   navigate("/movies");
    // }
  }, [isLoggedIn, navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    handleLogin({ password: formValue.password, email: formValue.email })
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
                value={formValue.email}
                required
              />
              <p className='login__input-error'>Что-то пошло не так...</p>
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
                value={formValue.password}
                required
              />
              <p className='login__input-error'>Что-то пошло не так...</p>
            </div>
          </div>
          <div className='login__btns'>
            <button className='login__btn-auth'>Войти</button>
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
