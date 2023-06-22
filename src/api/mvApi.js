import axiosClient from './axiosClient';
const mvApi = {
  getAll: (params) => {
    const url = '/mv';
    return axiosClient.get(url, { params });
  },
};
export default mvApi;
