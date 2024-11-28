import { useContext } from 'react';
import { FavoritesContext } from '../context/FavContext';
import EpisodeCard from '../components/EpisodeCard';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Episodes</h1>
      {favorites.length === 0 ? (
        <p>You have not added any favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map(episode => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              seasonNumber={episode.seasonNumber}
              showTitle={episode.showTitle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;