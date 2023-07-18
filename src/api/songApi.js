import axiosClient from './axiosClient';

const songApi = {
  getQuery: (params) => {
    const url = '/songs';
    return axiosClient.get(url, { params });
  },
};

export default songApi;
