import axiosClient from './axiosClient';

const url = 'playlists';

const userApi = {
  getAll: (params) => axiosClient.get(url, { params }),
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getBySlug: (slug) => axiosClient.get(`${url}/${slug}`),
  create: (data) => {
    return axiosClient.post(`${url}/store`, data);
  },
};

export default userApi;
