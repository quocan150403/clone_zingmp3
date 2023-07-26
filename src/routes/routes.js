import { lazy } from 'react';
import { OnlyContentLayout, ArtistLayout } from 'layouts';
import config from 'config';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const History = lazy(() => import('pages/History'));
const NewMusic = lazy(() => import('pages/NewMusic'));
const Radio = lazy(() => import('pages/Radio'));
const Top100 = lazy(() => import('pages/Top100'));
const Topic = lazy(() => import('pages/Topic'));
const ZingChart = lazy(() => import('pages/ZingChart'));
const Library = lazy(() => import('pages/Library'));
const Playlist = lazy(() => import('pages/Library/Playlist'));
const Detail = lazy(() => import('pages/Detail'));
const Register = lazy(() => import('pages/RegisterArtist'));
const Artist = lazy(() => import('pages/Artist'));
const ArtistPanel = lazy(() => import('pages/ArtistPanel'));

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login, layout: OnlyContentLayout },
  { path: config.routes.register, component: Register, layout: ArtistLayout },
  { path: config.routes.artistPanel, component: ArtistPanel, layout: ArtistLayout },
  { path: config.routes.topic, component: Topic },
  { path: config.routes.zingChart, component: ZingChart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.newMusic, component: NewMusic },
  { path: config.routes.top100, component: Top100 },
  { path: config.routes.album, component: Detail },
  { path: config.routes.artist, component: Artist },
  { path: config.routes.library.path, component: Library },
  { path: config.routes.library.history, component: History },
  { path: config.routes.library.favorite, component: Library },
  { path: config.routes.library.playlist, component: Playlist },
  { path: config.routes.library.album, component: Library },
  { path: config.routes.library.upload, component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
