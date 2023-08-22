import { lazy } from 'react';
import config from '../config';

// Layouts
import SimpleLayout from 'layouts/SimpleLayout';

// Pages
const LoginPage = lazy(() => import('pages/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ZingChartPage = lazy(() => import('pages/ZingChartPage'));
const GenrePage = lazy(() => import('pages/GenrePage'));
const NewMusicPage = lazy(() => import('pages/NewMusicPage'));
const LibraryPage = lazy(() => import('pages/LibraryPage'));
const DetailGenrePage = lazy(() => import('pages/DetailGenrePage'));
const DetailAlbumPage = lazy(() => import('pages/DetailAlbumPage'));
const DetailArtistPage = lazy(() => import('pages/DetailArtistPage'));
const DetailPlaylistPage = lazy(() => import('pages/DetailPlaylistPage'));
// const Top100Page = lazy(() => import('pages/Top100Page'));
// const HistoryPage = lazy(() => import('pages/HistoryPage'));
// const RadioPage = lazy(() => import('pages/RadioPage'));
// const PlaylistPage = lazy(() => import('pages/LibraryPage/Playlist'));
// const RegisterPage = lazy(() => import('pages/ArtistRegisterPage'));
// const ArtistPage = lazy(() => import('pages/ArtistProfilePage'));
// const ArtistDashboardPage = lazy(() => import('pages/ArtistDashboardPage'));
// const ArtistUploadPage = lazy(() => import('pages/ArtistUploadPage'));

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.login, component: LoginPage, layout: SimpleLayout },
  { path: config.routes.genre, component: GenrePage },
  { path: config.routes.zingChart, component: ZingChartPage },
  { path: config.routes.newMusic, component: NewMusicPage },

  { path: config.routes.detailGenre, component: DetailGenrePage },
  { path: config.routes.detailAlbum, component: DetailAlbumPage },
  { path: config.routes.detailArtist, component: DetailArtistPage },
  { path: config.routes.detailPlaylist, component: DetailPlaylistPage },
  // { path: config.routes.radio, component: Radio },
  // { path: config.routes.top100, component: Top100Page },
  // { path: config.routes.album, component: Detail },
  // { path: config.routes.artist, component: Artist },
];

const privateRoutes = [
  { path: config.routes.library.path, component: LibraryPage },
  // { path: config.routes.library.history, component: History },
  // { path: config.routes.library.favorite, component: Library },
  // { path: config.routes.library.playlist, component: Playlist },
  // { path: config.routes.library.album, component: Library },
  // { path: config.routes.library.upload, component: Library },
  // { path: config.routes.register, component: Register, layout: ArtistLayout },
  // { path: config.routes.dashboard.path, component: ArtistDashboard, layout: ArtistLayout },
  // { path: config.routes.dashboard.songs.upload, component: ArtistUpload, layout: ArtistLayout },
];

export { publicRoutes, privateRoutes };
