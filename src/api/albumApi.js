import axiosClient from './axiosClient';

const url = 'albums';

const albumApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  getByGenreId: (id, params) => axiosClient.get(`${url}/genre/${id}`, { params }),
  getByGenreIds: (params) => axiosClient.get(`${url}/genres`, { params }),
  getByArtistId: (id, params) => axiosClient.get(`${url}/artist/${id}`, { params }),
  getByArtistIds: (params) => axiosClient.get(`${url}/artists`, { params }),
};
export default albumApi;
