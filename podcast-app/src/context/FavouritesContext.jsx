import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {}
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (episode) => {
    setFavorites(prev => [...prev, episode]);
  };

  const removeFavorite = (episodeId) => {
    setFavorites(prev => prev.filter(ep => ep.id !== episodeId));
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