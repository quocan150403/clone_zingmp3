const routes = {
  home: '/',
  zingChart: '/zing-chart',
  radio: '/radio',
  newMusic: '/moi-phat-hanh',
  topic: '/hub',
  top100: '/top100',
  library: {
    path: '/my-music',
    history: '/my-music/history',
    favorite: '/my-music/favorite',
    playlist: '/my-music/library/playlist',
    album: '/my-music/album',
    upload: '/my-music/upload',
  },
  detail: '/detail/:id',
  detailSong: '/song/:id',
  notFound: '*',
  login: '/login',
  register: '/register',
};
export default routes;
