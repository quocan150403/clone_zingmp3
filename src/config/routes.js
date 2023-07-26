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
  artistPanel: '/dashboard',
  album: '/album/:slug',
  artist: '/artist/:slug',
  notFound: '*',
  login: '/login',
  register: '/register',
};
export default routes;
