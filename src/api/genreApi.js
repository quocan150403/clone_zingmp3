import axiosClient from './axiosClient';

const genreApi = {
  getQuery: (params) => {
    const url = '/genres';
    return axiosClient.get(url, { params });
  },
};

export default genreApi;
