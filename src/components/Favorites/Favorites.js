import React, { useState } from 'react';
import './Favorites.css';

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="favorites">
      <h2 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        Favorites {isOpen ? '▼' : '▶'}
      </h2>
      {isOpen && (
        <>
          {favorites.length === 0 ? (
            <p>No favorites yet. Add some!</p>
          ) : (
            <ul>
              {favorites.map((movie) => (
                <li key={movie.id}>
                  <div className="favorite-movie">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                          : 'https://via.placeholder.com/200x300?text=No+Poster+Available'
                      }
                      alt={movie.title}
                    />
                    <div className="favorite-movie-details">
                      <h3>{movie.title}</h3>
                      <p>{movie.release_date}</p>
                    </div>
                    <button onClick={() => onRemoveFromFavorites(movie.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Favorites;