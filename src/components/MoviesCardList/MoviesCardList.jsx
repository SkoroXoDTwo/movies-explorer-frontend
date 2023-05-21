import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const cardItemsConfig = [
    {
      id: 1,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
    {
      id: 2,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: true,
    },
    {
      id: 3,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
    {
      id: 1,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
    {
      id: 2,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: true,
    },
    {
      id: 3,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
    {
      id: 1,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
    {
      id: 2,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: true,
    },
    {
      id: 3,
      title: "33 слова о дизайне",
      imgLink: "https://i.ibb.co/jM8TDLf/pic-COLOR-pic.png",
      isSaved: false,
      isShort: false,
    },
  ]

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <ul className='movies-card-list__items'>
          {cardItemsConfig.map(card => (
            <li key={card.id}>
              <MoviesCard
                title={card.title}
                imgLink={card.imgLink}
                isSaved={card.isSaved}
                isShort={card.isShort}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
