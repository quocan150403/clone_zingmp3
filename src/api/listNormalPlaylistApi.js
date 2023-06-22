import axiosClient from './axiosClient';
const listNormalPlaylistApi = {
  getAll: (params) => {
    const url = '/listNormalPlaylist';
    return axiosClient.get(url, { params });
  },
};
export default listNormalPlaylistApi;
