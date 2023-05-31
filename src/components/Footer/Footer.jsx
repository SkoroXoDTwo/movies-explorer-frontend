import './Footer.css';

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className='footer__row'>
          <span className='footer__copyright'>
            &#169; {year}
          </span>

          <ul className='footer__link-list'>
            <li>
              <a className='footer__link' href='https://practicum.yandex.ru/' target="_blank" rel='noreferrer'>
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a className='footer__link' href='https://github.com/SkoroXoDTwo' target="_blank" rel='noreferrer' >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
