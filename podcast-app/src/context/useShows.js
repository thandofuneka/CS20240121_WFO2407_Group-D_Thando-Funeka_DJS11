import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function useShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const data = await api.getAllShows();
        const sortedShows = data.sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        setShows(sortedShows);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return { shows, loading, error };
}