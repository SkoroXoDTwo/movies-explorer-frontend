import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ isAuth, backgroundColor }) {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  return (
    <header className="header" style={{backgroundColor: backgroundColor}}>
      <div className='header__container'>
        <div className='header__column'>
          <Link to="/" className='header__logo-link'>
            <div className='header__logo-icon' />
          </Link>


          {isAuth &&
            <nav className='header__navigation'>
              <ul className='header__navigation-list'>
                <li>
                  <NavLink to='/movies' className={({ isActive }) =>
                    `header__navigation-link ${isActive ? "header__navigation-link_active" : ""}`}>
                    Фильмы
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/saved-movies" className={({ isActive }) =>
                    `header__navigation-link ${isActive ? "header__navigation-link_active" : ""}`}>
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </ul>
            </nav>
          }
        </div>
        <div className='header__column'>
          {
            isAuth
              ?
              <>
                <Link to="/profile" className='header__profile-btn'>
                  <p className='header__profile-btn-text'>Аккаунт</p>
                  <div className='header__profile-btn-icon'></div>
                </Link>

                <button className='header__burger-btn' onClick={() => setIsBurgerMenuOpened(true)} />
              </>
              :
              <nav className='header__auth-btns'>
                <ul className='header__auth-btns-list'>
                  <li>
                    <Link to="/signup" className='header__auth-btn-registration'>Регистрация</Link>
                  </li>
                  <li>
                    <Link to="/signin" className='header__auth-btn-login'>Войти</Link>
                  </li>
                </ul>
              </nav>
          }
        </div>
      </div>

      <div className={`header__burger-menu-container${isBurgerMenuOpened ? ' header__burger-menu-container_visible' : ''}`}>
        <div className={`header__burger-menu-overlay`} />
        <div className={`header__burger-menu${isBurgerMenuOpened ? ' header__burger-menu_opened' : ''}`}>
          <button className='header__burger-menu-close-btn' onClick={() => setIsBurgerMenuOpened(false)} />
          <nav>
            <ul className='header__burger-menu-navigation'>
              <li>
                <NavLink to='/' className={({ isActive }) =>
                  `header__burger-menu-navigation-link ${isActive ? "header__burger-menu-navigation-link_active" : ""}`}>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to='/movies' className={({ isActive }) =>
                  `header__burger-menu-navigation-link ${isActive ? "header__burger-menu-navigation-link_active" : ""}`}>
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink to='/saved-movies' className={({ isActive }) =>
                  `header__burger-menu-navigation-link ${isActive ? "header__burger-menu-navigation-link_active" : ""}`}>
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to="/profile" className='header__profile-btn header__profile-btn_burger-menu'>
            <p className='header__profile-btn-text'>Аккаунт</p>
            <div className='header__profile-btn-icon'></div>
          </Link>
        </div>
      </div>
    </header >
  );
}

export default Header;
