import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useShowDetails from '../hooks/useShowDetails';
import SeasonList from '../components/SeasonList';
import BackButton from '../components/BackButton';

function ShowDetails() {
  const { id } = useParams();
  const { show, loading, error } = useShowDetails(id);
  const [selectedSeason, setSelectedSeason] = useState(1);

  if (loading) return <div>Loading show details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!show) return <div>Show not found</div>;

  return (
    <div className="show-details">
      <BackButton />
      
      <div className="show-header">
        <img 
          src={show.image} 
          alt={show.title} 
          className="show-detail-image"
        />
        <div className="show-info">
          <h1>{show.title}</h1>
          <p>{show.description}</p>
        </div>
      </div>

      <div className="season-selector">
        <select 
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(Number(e.target.value))}
        >
          {show.seasons.map((season) => (
            <option key={season.season} value={season.season}>
              Season {season.season}
            </option>
          ))}
        </select>
      </div>

      <SeasonList 
        seasons={show.seasons}
        selectedSeason={selectedSeason}
        showTitle={show.title}
      />
    </div>
  );
}

export default ShowDetails;