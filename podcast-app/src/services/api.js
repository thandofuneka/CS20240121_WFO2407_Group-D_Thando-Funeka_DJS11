const BASE_URL = 'https://podcast-api.netlify.app';

export const api = {
  getAllShows: async () => {
    const response = await fetch(BASE_URL);
    return response.json();
  },

  getShow: async (id) => {
    const response = await fetch(`${BASE_URL}/id/${id}`);
    return response.json();
  },

  getGenre: async (id) => {
    const response = await fetch(`${BASE_URL}/genre/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },

  getAllGenres: async () => {
    const genreIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const genrePromises = genreIds.map(id => api.getGenre(id));
    return Promise.all(genrePromises);
  }
};