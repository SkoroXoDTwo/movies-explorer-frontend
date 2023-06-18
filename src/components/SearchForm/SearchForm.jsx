import { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch, value, isShotModeActive, setIsShotModeActive, setValue }) => {
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={(e) => onSearch(e)}>
        <div className={`search-form__row ${isInputFocus ? 'search-form__row_focus' : ''}`}>
          <div className='search-form__input-container'>
            <div className='search-form__input-row'>
              <div className='search-form__input-icon' />
              <input
                className='search-form__input'
                placeholder='Фильм'
                onFocus={() => { setIsInputFocus(true) }}
                onBlur={() => { setIsInputFocus(false) }}
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
              />
              <button className='search-form__input-btn' type='submit' />
            </div>
          </div>
          <div className='search-form__toggle-container'>
            <button
              className={`search-form__toggle-btn ${isShotModeActive ? 'search-form__toggle-btn_active' : ''}`}
              onClick={() => setIsShotModeActive(!isShotModeActive)}
              type='button'
            />
            <p className='search-form__toggle-text'>Короткометражки</p>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
