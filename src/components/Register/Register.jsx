import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Register.css';

function Register({ handleRegister, isLoggedIn }) {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    name: ""
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/movies");
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onRegister = (e) => {
    e.preventDefault();
    handleRegister({ password: formValue.password, email: formValue.email, name: formValue.name })
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
                value={formValue.name}
                minLength="2"
                maxLength="30"
                required
              />
              <p className='register__input-error'>Что-то пошло не так...</p>
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
                value={formValue.email}
                required
              />
              <p className='register__input-error'>Что-то пошло не так...</p>
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
                value={formValue.password}
                required
              />
              <p className='register__input-error'>Что-то пошло не так...</p>
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
        </form>
      </main>
    </div>
  );
}

export default Register;
