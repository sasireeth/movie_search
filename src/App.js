import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { fetchMovies } from './api/fetchMovies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const movies = await fetchMovies(query);
      console.log(movies);
      setMovies(movies);
    } catch (err) {
      setError('Failed to fetch movies');
    }
    setLoading(false);
  };

  return (
    <div className="container flex flex-col mx-auto px-4 place-items-center bg-black">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 justify-center items-center w-10/12 place-items-strech">
        {movies.map((movie) => (
          <MovieCard key={movie.key} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
