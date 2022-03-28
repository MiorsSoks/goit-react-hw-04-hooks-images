import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GrSearch } from 'react-icons/gr';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  // Отвечает за обновление состояния
  const handleChange = e => {
    setValue(e.target.value.toLowerCase());
  };

  // Вызывается при отправке формы
  const handleSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      alert('Введите данные для поиска');
      return;
    }
    // Проп который передается форме для вызова при сабмите
    onSubmit({ value });
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <GrSearch />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Searchbar>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
