import axiosClient from './axiosClient';
const url = 'songs';

const songApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getByIds: (params) => axiosClient.get(`${url}/list`, { params }),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  getByArtistId: (id, limit) =>
    axiosClient.get(`${url}/artist/${id}`, {
      params: {
        limit,
      },
    }),
  getByArtistIds: (params) => axiosClient.get(`${url}/artists`, { params }),
  getNew: (limit) =>
    axiosClient.get(`${url}/new`, {
      params: {
        limit,
      },
    }),
  getHot: (limit) =>
    axiosClient.get(`${url}/hot`, {
      params: {
        limit,
      },
    }),
};

export default songApi;
