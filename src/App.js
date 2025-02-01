import React, { useState, useEffect } from 'react';
import { searchMovies } from './api/api.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import MovieList from './components/MovieList/MovieList.js';
import Favorites from './components/Favorites/Favorites.js';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  const handleSearch = async (query) => {
    if (!query) return; // Don't search if query is empty

    setIsLoading(true); // Show loading spinner
    setError(null); // Clear previous errors

    try {
      const results = await searchMovies(query);
      setMovies(results); // Update the movies state with the fetched results
    } catch (error) {
      setError('Failed to fetch movies. Please try again.'); // Set error message
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };

const addToFavorites = (movie) => {
  if (!favorites.some(fav => fav.id === movie.id)) {
    setFavorites(prev => [...prev, movie]);
  }
};

  const removeFromFavorites = (movieId) => {
    setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
  };

  return (
    <div className="app">
      <h1>Binge Buddy</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div className="loading-spinner"></div>} {/* Loading spinner */}
      {error && <div className="error-message">{error}</div>} {/* Error message */}
      <MovieList movies={movies} onAddToFavorites={addToFavorites} />
      <Favorites favorites={favorites} onRemoveFromFavorites={removeFromFavorites} />
    </div>
  );
};

export default App;