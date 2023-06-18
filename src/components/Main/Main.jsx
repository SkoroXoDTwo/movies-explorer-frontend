import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

import { portfolioProjectsConfig } from '../../config/portfolioProjectsConfig';
import Portfolio from '../Portfolio/Portfolio';

const Main = ({ isLoggedIn }) => {
  return (
    <>
      <Header isAuth={isLoggedIn} backgroundColor="#073042" />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs tehcsList={['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']} />
        <AboutMe />
        <Portfolio projectsConfig={portfolioProjectsConfig} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
