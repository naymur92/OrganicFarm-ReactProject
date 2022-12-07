import React from 'react';

function Search() {
  return (
    <div className="search-input">
      <div className="search-close">
        <i className="fas fa-times" />
      </div>
      <form>
        <input type="text" name="text" placeholder="Search Heare" />
        <button className="search-btn" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}

export default Search;
