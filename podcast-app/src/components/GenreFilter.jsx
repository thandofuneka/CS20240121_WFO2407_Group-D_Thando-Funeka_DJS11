import { useState, useEffect } from 'react';
import { api } from '../services/api';
import PropTypes from 'prop-types';

function GenreFilter({ onGenreSelect }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const genreTitles = {
    1: 'Personal Growth',
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  }; //Mapping genre Ids to titles for display

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await api.getAllGenres(); // Fetch all genres
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (e) => {
    const genreId = e.target.value; // Get the selected genre ID from the event
    setSelectedGenre(genreId); // Update the selected genre state
    onGenreSelect(genreId); // Call the parent function to notify about the genre selection
  };

  return (
    <div className="genre-filter">
      <label htmlFor="genre-select">Filter by Genre:</label>
      <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genreTitles[genre.id] || genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

GenreFilter.propTypes = {
  onGenreSelect: PropTypes.func.isRequired
};

export default GenreFilter;