import React from 'react';
import MovieCard from '../MovieCard/MovieCard.js';
import './MovieList.css';

const MovieList = ({ movies, onAddToFavorites }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </div>
  );
};

export default MovieList;