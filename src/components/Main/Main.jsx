import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

import { portfolioProjectsConfig } from '../../config/portfolioProjectsConfig';

function Main() {

  return (
    <>
      <Header isAuth={true} backgroundColor="#073042" />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs tehcsList={['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']} />
        <AboutMe projectsConfig={portfolioProjectsConfig} />
        <Footer />
      </main>
    </>
  );
}

export default Main;
