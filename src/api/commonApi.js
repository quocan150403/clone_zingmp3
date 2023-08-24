import axiosClient from './axiosClient';

const commonApi = {
  search: (query) =>
    axiosClient.get('search', {
      params: {
        q: query,
      },
    }),
};

export default commonApi;
