import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [isActiveToggleBtn, setIsActiveToggleBtn] = useState(false)

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__input-container'>
          <div className='search-form__input-icon' />
          <input className='search-form__input' placeholder='Фильм' />
          <button className='search-form__input-btn' />
        </form>
        <div className='search-form__toggle-container'>
          <button
            className={`search-form__toggle-btn ${isActiveToggleBtn ? 'search-form__toggle-btn_active' : ''}`}
            onClick={() => setIsActiveToggleBtn(!isActiveToggleBtn)}
          />
          <p className='search-form__toggle-text'>Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
