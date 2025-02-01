import React, { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import './MovieCard.css';

const MovieCard = ({ movie, onAddToFavorites }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster+Available';

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <div className="buttons">
        <button onClick={() => onAddToFavorites(movie)}>Add to Favorites</button>
        <button onClick={toggleDetails}>View Details</button>
      </div>
      

      {/* Modal for Movie Details */}
      {showDetails && (
        <div className="modal-overlay">
          <div className="modal-content">
            <MovieDetails movie={movie} onClose={toggleDetails} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;