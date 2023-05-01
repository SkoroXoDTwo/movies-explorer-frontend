import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import './Main.css';

function Main() {
  return (
    <>
      <Header isAuth={false} />
      <main>
        <Promo />
      </main>
    </>
  );
}

export default Main;
