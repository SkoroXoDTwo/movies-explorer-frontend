import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <main className="page-not-found">
            <div className="page-not-found__container">
                <div className="page-not-found__content">
                    <h1 className='page-not-found__title'>404</h1>
                    <p className='page-not-found__subtitle'>Страница не найдена</p>
                </div>
                <button className='page-not-found__btn-prev' onClick={() => navigate(-1)}>Назад</button>
            </div>
        </main>
    )
};

export default PageNotFound;
