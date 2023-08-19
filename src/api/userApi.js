import axiosClient from './axiosClient';

const url = '/users';

const userApi = {
  getQuery: (params) => axiosClient.get(url, { params }),
  getById: (id) => axiosClient.get(`${url}/${id}`),
  getByUID: (id) => axiosClient.get(`${url}/uid/${id}`),
  getBySlug: (slug) => axiosClient.get(url, { slug }),
  createUser: (data) => {
    return axiosClient.post(`${url}/create-user`, data);
  },
};

export default userApi;
