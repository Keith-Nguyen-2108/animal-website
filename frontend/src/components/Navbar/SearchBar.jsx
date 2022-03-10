import React from 'react'

const SearchBar = ({ active }) => {
  return (
    <div className={`search__bar ${active ? 'active' : ''}`}>
      <div className="search__bar__container">
        <input type="text" className="search__input" />
        <i className="fas fa-search btn__search"></i>
      </div>
    </div>
  )
}

export default SearchBar