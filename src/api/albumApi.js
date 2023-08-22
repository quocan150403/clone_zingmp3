import axiosClient from './axiosClient';

const url = 'albums';

const albumApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  getByGenreId: (id) => axiosClient.get(`${url}/genre/${id}`),
  getByGenres: (ids) => axiosClient.get(`${url}/genres?ids=${ids.join(',')}`),
  getByGenreSlug: (slug) => axiosClient.get(`${url}/genre${slug}`),
};
export default albumApi;
