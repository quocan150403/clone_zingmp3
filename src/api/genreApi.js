import axiosClient from './axiosClient';
const url = 'genres';

const genreApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
};

export default genreApi;
