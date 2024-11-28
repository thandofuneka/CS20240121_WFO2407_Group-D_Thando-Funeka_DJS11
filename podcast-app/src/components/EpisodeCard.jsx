import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FavoritesContext } from '../context/FavouritesContext';
import AudioPlayer from './AudioPlayer';

function EpisodeCard({ episode, seasonNumber, showTitle }) {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);
  const isEpisodeFavorite = favorites.some(fav => fav.id === episode.id);


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
        <AudioPlayer src={episode.file} />
        <button 
          className={`favorite-button ${isEpisodeFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteToggle}
        >
          {isEpisodeFavorite ? '❤️' : '🤍'}
        </button>
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