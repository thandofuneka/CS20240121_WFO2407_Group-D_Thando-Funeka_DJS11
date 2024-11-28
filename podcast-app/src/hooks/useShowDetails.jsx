import { useState, useEffect } from 'react';
import { api } from '../services/api';

function useShowDetails(showId) {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        setLoading(true);
        const data = await api.getShow(showId);
        setShow(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (showId) {
      fetchShow();
    }
  }, [showId]);

  return { show, loading, error};
}

export default useShowDetails;