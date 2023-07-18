import axiosClient from './axiosClient';

const galleryApi = {
  getQuery: (params) => {
    const url = '/galleries';
    return axiosClient.get(url, { params });
  },
};

export default galleryApi;
