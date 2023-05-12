import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

function Main() {
  const portfolioProjectsConfig = [
    {
      title: "Статичный сайт",
      link: ""
    },
    {
      title: "Адаптивный сайт",
      link: ""
    },
    {
      title: "Одностраничное приложение",
      link: ""
    }
  ]
  return (
    <>
      <Header isAuth={false} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs tehcsList={['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']} />
        <AboutMe projectsConfig={portfolioProjectsConfig} />
      </main>
    </>
  );
}

export default Main;
