import axiosClient from './axiosClient';
const albumApi = {
  getAll: (params) => {
    const url = '/albums';
    return axiosClient.get(url, { params });
  },
};
export default albumApi;
