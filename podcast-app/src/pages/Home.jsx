import { useState } from 'react';
import { useShows } from '../context/useShows';
import ShowCard from '../components/ShowCards';

function Home() {
  const { shows, loading, error } = useShows();
  const [sortOrder, setSortOrder] = useState('asc');

  if (loading) return <div>Loading shows...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedShows = [...shows].sort((a, b) => {
    return sortOrder === 'asc' 
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  return (
    <div className="home">
      <div className="controls">
        <button onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}>
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