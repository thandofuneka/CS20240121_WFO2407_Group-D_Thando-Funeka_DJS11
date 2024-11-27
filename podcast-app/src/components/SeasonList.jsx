import EpisodeCard from './EpisodeCard';
import PropTypes from 'prop-types';

function SeasonList({ seasons, selectedSeason }) {
  const currentSeason = seasons.find(s => s.season === selectedSeason);

  if (!currentSeason) return null;

  return (
    <div className="season-list">
      <h2>Season {selectedSeason}</h2>
      <div className="episodes-grid">
        {currentSeason.episodes.map(episode => (
          <EpisodeCard 
            key={episode.episode}
            episode={episode}
            seasonNumber={selectedSeason}
          />
        ))}
      </div>
    </div>
  );
}

SeasonList.propTypes = {
  seasons: PropTypes.array.isRequired,
  selectedSeason: PropTypes.number.isRequired
};

export default SeasonList;