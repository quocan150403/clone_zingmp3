import axiosClient from './axiosClient';

const url = 'playlists';

const userApi = {
  getAll: (params) => axiosClient.get(url, { params }),
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  // getByIds: (params) => axiosClient.get(`${url}/list`, { params }),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  addSongToPlaylist: (playlistId, songId) =>
    axiosClient.post(`${url}/songs/add/${playlistId}`, { songId }),
  removeSongFromPlaylist: (playlistId, songId) =>
    axiosClient.delete(`${url}/songs/remove/${playlistId}`, { data: { songId } }),
  create: (data) => axiosClient.post(`${url}/store`, data),
  update: (id, data) => axiosClient.put(`${url}/update/${id}`, data),
  remove: (id) => axiosClient.delete(`${url}/force/${id}`),
};

export default userApi;
