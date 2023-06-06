import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [isActiveToggleBtn, setIsActiveToggleBtn] = useState(false)
  const [isInputFocus, setIsInputFocus] = useState(false);

  return (
    <section className='search-form'>
      <form className='search-form__container' onSubmit={(e) => onSearch(e, searchValue)}>
        <div className={`search-form__row ${isInputFocus ? 'search-form__row_focus' : ''}`}>
          <div className='search-form__input-container'>
            <div className='search-form__input-row'>
              <div className='search-form__input-icon' />
              <input
                className='search-form__input'
                placeholder='Фильм'
                onFocus={() => { setIsInputFocus(true) }}
                onBlur={() => { setIsInputFocus(false) }}
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
              />
              <button className='search-form__input-btn' type='submit' />
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
