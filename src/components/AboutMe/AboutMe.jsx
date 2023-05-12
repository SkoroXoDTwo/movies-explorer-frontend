import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutMe.css';

function AboutMe({ projectsConfig }) {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <SectionTitle title="Студент" />
        <div className='about-me__info-container'>
          <div className='about-me__column'>
            <div className='about-me__info'>
              <h3 className='about-me__title'>
                Алексей
              </h3>
              <h4 className='about-me__subtitle'>
                Фронтенд-разработчик, 30 лет
              </h4>
              <p className='about-me__text'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <a className='about-me__github-link' href='https://github.com/SkoroXoDTwo'>
              Github
            </a>
          </div>
          <img className='about-me__avatar' src="https://i.ibb.co/rf2RsRn/about-me-avatar.jpg" alt="аватар" />
        </div>
        <div className='about-me__portfolio'>
          <h3 className='about-me__portfolio-title'>
            Портфолио
          </h3>
          <ul className='about-me__portfolio-list'>
            {projectsConfig.map((project) => (
              <li key={project.title} className="about-me__portfolio-item">
                <a className='about-me__portfolio-item-link' href={project.link}>
                  <p className='about-me__portfolio-item-text'>{project.title}</p>
                  <div className='about-me__portfolio-item-icon'></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
