import axiosClient from './axiosClient';

const url = 'playlists';

const userApi = {
  getAll: (params) => axiosClient.get(url, { params }),
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getByIds: (params) => axiosClient.get(`${url}/list`, { params }),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  addSongsToPlaylist: (playlistId, arrayIds) =>
    axiosClient.post(`${url}/songs/add/${playlistId}`, { songIds: arrayIds }),
  removeSongsFromPlaylist: (playlistId, arrayIds) =>
    axiosClient.delete(`${url}/songs/remove/${playlistId}`, { data: { songIds: arrayIds } }),
  create: (data) => axiosClient.post(`${url}/store`, data),
  update: (id, data) => axiosClient.put(`${url}/update/${id}`, data),
  remove: (id) => axiosClient.delete(`${url}/force/${id}`),
};

export default userApi;
