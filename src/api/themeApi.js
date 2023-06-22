import axiosClient from './axiosClient';
const themeApi = {
  getAll: (params) => {
    const url = '/themes';
    return axiosClient.get(url, { params });
  },
};
export default themeApi;
