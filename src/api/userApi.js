import axiosClient from './axiosClient';

const url = 'users';

const userApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getBySlug: (slug) => axiosClient.get(url, { slug }),
  getByUID: (id) => axiosClient.get(`${url}/uid/${id}`),
  createUser: (data) => {
    return axiosClient.post(`${url}/create-user`, data);
  },
  createHistorySong: (userId, songId) => {
    return axiosClient.post(`${url}/history/song`, { songId, userId });
  },
  createHistoryAlbum: (userId, albumId) => {
    return axiosClient.post(`${url}/history/album`, { albumId, userId });
  },
  createHistoryPlaylist: (userId, playlistId) => {
    return axiosClient.post(`${url}/history/playlist`, { playlistId, userId });
  },
};

export default userApi;
