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
    return response.json();
  }
};