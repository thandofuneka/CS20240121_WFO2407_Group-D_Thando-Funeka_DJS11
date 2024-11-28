import { useEffect, useState } from 'react';
import { useShows } from '../context/useShows';
import ShowCard from '../components/ShowCards';
import GenreFilter from '../components/GenreFilter';

function Home() {
  const { shows, loading, error } = useShows();
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredShows, setFilteredShows] = useState(shows);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {

    if (selectedGenre) {
      const genreFilteredShows = shows.filter(show => {
        return Array.isArray(show.genres) && show.genres.includes(Number(selectedGenre));
      });
      setFilteredShows(genreFilteredShows);
    } else {
      setFilteredShows(shows);
    }
  }, [shows, selectedGenre])

  if (loading) return <div>Loading shows...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedShows = [...filteredShows].sort((a, b) => {
    return sortOrder === 'asc' 
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  const handleGenreSelection = (genreId) => {
    console.log('Selected Genre ID:', genreId);
    setSelectedGenre(genreId);
    if (!genreId) {
      setFilteredShows(shows);
      return;
    }

    const genreFilteredShows = shows.filter(show => 
      Array.isArray(show.genres) && show.genres.includes(Number(genreId))
    );
    console.log('Filtered Shows on Selection:', genreFilteredShows);
    setFilteredShows(genreFilteredShows);
  };
  

  return (
    <div className="home">
      <div className="controls">
        <GenreFilter 
          onGenreSelect={handleGenreSelection} 
        />
        <button className='sort-button' onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
          Sort {sortOrder === 'asc' ? '↓' : '↑'}
        </button>
      </div>
      <div className="shows-grid">
        {sortedShows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
  
}

export default Home;