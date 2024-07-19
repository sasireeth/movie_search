import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim() === '') {
        setError('Please enter a movie name');
        return;
      }
      onSearch(query);
      setQuery('');
      setError('');
    };
  

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="px-4 py-2 border rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
      <br/>
      {error && <p className="text-red-500 ml-2 place-content-center">{error}</p>}
    </form>
  );
};

export default SearchBar;
