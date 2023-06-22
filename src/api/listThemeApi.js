import axiosClient from './axiosClient';
const listThemeApi = {
  getAll: (params) => {
    const url = '/listTheme';
    return axiosClient.get(url, { params });
  },
};
export default listThemeApi;
