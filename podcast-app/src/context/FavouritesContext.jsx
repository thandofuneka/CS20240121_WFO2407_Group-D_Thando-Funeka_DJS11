import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoritesContext } from './FavContext';


export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (episode) => {
    setFavorites(prev => [...prev, episode]); // Add a new episode to the favorites list
  };

  const removeFavorite = (episodeId) => {
    setFavorites(prev => prev.filter(ep => ep.id !== episodeId)); // Remove an episode from favorites by ID
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
};