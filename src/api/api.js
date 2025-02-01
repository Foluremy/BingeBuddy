import axios from 'axios';

const API_KEY = '2ec377976578a9efc5413bbca4436aff';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
    try {
    const response = await fetch(
         `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
      
  
      if (!response.ok) {
        throw new Error('Failed to fetch movies.'); // Throw error if response is not OK
      }
  
      const data = await response.json();
      console.log('API Response:', data); // Log the response for debugging
  
      if (data.Error) {
        throw new Error(data.Error); // Throw error if API returns an error
      }

      if (data.results.length === 0) {
        throw new Error('No movies found.'); // Throw error if no results
      }
  
      return data.results || []; // Return movie list or empty array
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw new Error('Failed to fetch movies. Please try again.');
    }
  };
  
export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                i: id, // Movie ID
            },
        });
        return response.date.Search || []; // Return movie details
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}