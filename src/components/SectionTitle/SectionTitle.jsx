import './SectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <div className='section-title'>
      <h2 className='section-title__title'>
        {title}
      </h2>
      <div className='section-title__line' />
    </div>
  );
}

export default SectionTitle;
