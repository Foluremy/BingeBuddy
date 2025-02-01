import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster+Available';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{movie.title}</h2>
        <img src={posterUrl} alt={movie.title} />
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;