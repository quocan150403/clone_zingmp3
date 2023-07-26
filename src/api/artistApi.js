import axiosClient from './axiosClient';
const artistApi = {
  getAll: (params) => {
    const url = '/artists';
    return axiosClient.get(url, { params });
  },
  getBySlug: (slug) => {
    const url = `/artists/${slug}`;
    return axiosClient.get(url);
  },
};
export default artistApi;
