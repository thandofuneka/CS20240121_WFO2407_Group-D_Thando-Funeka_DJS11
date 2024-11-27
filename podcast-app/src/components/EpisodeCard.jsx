import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FavoritesContext } from '../context/FavoritesContext';

function EpisodeCard({ episode, seasonNumber, showTitle }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const isEpisodeFavorite = isFavorite(episode.id);


  const handleFavoriteToggle = () => {
    if (isEpisodeFavorite) {
      removeFavorite(episode.id);
    } else {
      addFavorite({ ...episode, showTitle, seasonNumber });
    }
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
          className={`favorite-button ${isEpisodeFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteToggle}
        >
          {isEpisodeFavorite ? '❤️' : '🤍'}
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
  seasonNumber: PropTypes.number.isRequired,
  showTitle: PropTypes.string.isRequired
};

export default EpisodeCard;