import axiosClient from './axiosClient';
const artistApi = {
  getAll: (params) => {
    const url = '/artists';
    return axiosClient.get(url, { params });
  },
};
export default artistApi;
