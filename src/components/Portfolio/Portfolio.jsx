import './Portfolio.css';

function Portfolio({ projectsConfig }) {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h3 className='portfolio__title'>
          Портфолио
        </h3>
        <ul className='portfolio__list'>
          {projectsConfig.map((project) => (
            <li key={project.title} className="portfolio__item">
              <a className='portfolio__item-link' href={project.link} target="_blank" rel="noreferrer">
                <p className='portfolio__item-text'>{project.title}</p>
                <div className='portfolio__item-icon'></div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
