import axiosClient from './axiosClient';
const specialPlaylistsApiApi = {
  getAll: (params) => {
    const url = '/specialPlaylists';
    return axiosClient.get(url, { params });
  },
};
export default specialPlaylistsApiApi;
