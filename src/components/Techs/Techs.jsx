import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

function Techs({ tehcsList }) {
  return (
    <section className='techs'>
      <div className='techs__container'>
        <SectionTitle title="Технологии" />
        <div className='techs__info'>
          <h3 className='tehcs__info-title'>
            7 технологий
          </h3>
          <p className='tehcs__info-text'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className='tehcs__list'>
            {tehcsList.map(tech => (
              <li key={tech}>
                <article className='tehcs__item'>
                  {tech}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
