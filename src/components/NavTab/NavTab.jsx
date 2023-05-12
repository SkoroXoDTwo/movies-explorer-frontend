import './NavTab.css';

function NavTab() {
  return (
    <section className='nav-tab'>
      <div className='nav-tab__container'>
        <nav>
          <ul className='nav-tab__list'>
            <li>
              <a className='nav-tab__link' href='#about-project'>
                О проекте
              </a>
            </li>
            <li>
              <a className='nav-tab__link' href='#techs'>
                Технологии
              </a>
            </li>
            <li>
              <a className='nav-tab__link' href='#header'>
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default NavTab;
