import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './Main.css';

function Main() {
  return (
    <>
      <Header isAuth={false} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
      </main>
    </>
  );
}

export default Main;
