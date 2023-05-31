import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id="about-project">
      <div className='about-project__container'>
        <SectionTitle title="О проекте" />
        <ul className='about-project__info-list'>
          <li>
            <article className='about-project__info-item'>
              <h3 className='about-project__subtitle'>
                Дипломный проект включал 5 этапов
              </h3>
              <p className='about-project__text'>
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
              </p>
            </article>
          </li>
          <li>
            <article className='about-project__info-item'>
              <h3 className='about-project__subtitle'>
                На выполнение диплома ушло 5 недель
              </h3>
              <p className='about-project__text'>
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
              </p>
            </article>
          </li>
        </ul>
        <div className='about-project__time-intervals'>
          <div className='about-project__time-interval about-project__time-interval_short'>
            <p className='about-project__time-interval-text'>1 неделя</p>
            <p className='about-project__time-interval-label'>Back-end</p>
          </div>
          <div className='about-project__time-interval'>
            <p className='about-project__time-interval-text'>4 недели</p>
            <p className='about-project__time-interval-label'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
