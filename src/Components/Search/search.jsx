import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
