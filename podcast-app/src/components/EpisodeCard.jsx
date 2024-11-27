import { useState } from 'react';
import PropTypes from 'prop-types';

function EpisodeCard({ episode, seasonNumber }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="episode-card">
      <div className="episode-info">
        <h3>Episode {episode.episode}: {episode.title}</h3>
        <p>Season {seasonNumber}</p>
        <p>{episode.description}</p>
      </div>
      
      <div className="episode-controls">
        <button 
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={handlePlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <audio
          src={episode.file}
          controls
          className="audio-player"
        />
      </div>
    </div>
  );
}

EpisodeCard.propTypes = {
  episode: PropTypes.object.isRequired,
  seasonNumber: PropTypes.number.isRequired
};

export default EpisodeCard;