import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [isActiveToggleBtn, setIsActiveToggleBtn] = useState(false)

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={(e) => e.preventDefault()}>
        <div className='search-form__row'>
          <div className='search-form__input-container'>
            <div className='search-form__input-row'>
              <div className='search-form__input-icon' />
              <input className='search-form__input' placeholder='Фильм' />
              <button className='search-form__input-btn' />
            </div>
          </div>
          <div className='search-form__toggle-container'>
            <button
              className={`search-form__toggle-btn ${isActiveToggleBtn ? 'search-form__toggle-btn_active' : ''}`}
              onClick={() => setIsActiveToggleBtn(!isActiveToggleBtn)}
            />
            <p className='search-form__toggle-text'>Короткометражки</p>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
