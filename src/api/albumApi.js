import axiosClient from './axiosClient';
const albumApi = {
  getQuery: (params) => {
    const url = '/albums';
    return axiosClient.get(url, { params });
  },
};
export default albumApi;
