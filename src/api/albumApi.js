import axiosClient from './axiosClient';
const albumApi = {
  getQuery: (params) => {
    const url = '/albums';
    return axiosClient.get(url, { params });
  },

  getBySlug: (slug) => {
    const url = `/albums/${slug}`;
    return axiosClient.get(url);
  },
};
export default albumApi;
