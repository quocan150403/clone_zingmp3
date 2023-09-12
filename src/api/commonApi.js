import axiosClient from './axiosClient';

const commonApi = {
  search: (query) => {
    return axiosClient.get('search', {
      params: {
        q: query,
      },
    });
  },
  toggleLikeSong: (songId, userId) => {
    return axiosClient.post('toggle-like', {
      userId,
      itemId: songId,
      itemType: 'song',
    });
  },
  toggleLikeAlbum: (albumId, userId) => {
    return axiosClient.post('toggle-like', {
      userId,
      itemId: albumId,
      itemType: 'album',
    });
  },
  toggleFollowerArtist: (artistId, userId) => {
    return axiosClient.post('toggle-follow', {
      artistId,
      userId,
    });
  },
};

export default commonApi;
