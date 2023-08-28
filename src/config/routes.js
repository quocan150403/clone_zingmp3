const routes = {
  home: '/',
  zingChart: '/zing-chart',
  radio: '/radio',
  newMusic: '/moi-phat-hanh',
  genre: '/hub',
  detailGenre: '/hub/:slug',
  detailAlbum: '/album/:slug',
  detailArtist: '/artist/:slug',
  detailPlaylist: '/playlist/:slug',
  detailSong: '/song/:slug',
  library: {
    path: '/my-music/*',
    history: '/my-music/history/*',
    favorite: '/my-music/song',
    playlist: '/my-music/library/playlist',
    album: '/my-music/album',
    upload: '/my-music/upload',
  },
  notFound: '*',
  login: '/login',
  register: '/register',
  dashboard: {
    path: '/dashboard',
    songs: {
      path: '/dashboard/songs',
      upload: '/dashboard/songs/upload',
    },
    albums: {
      path: '/dashboard/albums',
      edit: '/dashboard/albums/edit/:slug',
    },
  },
};
export default routes;
