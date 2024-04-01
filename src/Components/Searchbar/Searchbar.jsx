import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Searchbar = () => {
  return (
    <div className="search-bar">
    <input type="text" id="search-input" placeholder="Buscar Lugar..." />
    <button id="search-btn">
      <FontAwesomeIcon icon={faSearch} /> 
    </button>
  </div>
  )
}


