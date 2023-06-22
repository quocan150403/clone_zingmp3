import axiosClient from './axiosClient';
const slideApi = {
  getAll: (params) => {
    const url = '/slider';
    return axiosClient.get(url, { params });
  },
};
export default slideApi;
