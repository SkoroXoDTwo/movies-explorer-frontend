import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__column'>
          <a className='header__logo' href='#'/>
        </div>
        <div className='header__column'>
          <nav className='header__auth-btns'>
            <ul className='header__auth-btns-list'>
              <li>
                <button className='header__auth-btn-registration'>Регистрация</button>
              </li>
              <li>
                <button className='header__auth-btn-login'>Войти</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
