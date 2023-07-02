import config from 'config';
import Home from 'pages/Home';
import Login from 'pages/Login';
import History from 'pages/History';
import NewMusic from 'pages/NewMusic';
import Radio from 'pages/Radio';
import Top100 from 'pages/Top100';
import Topic from 'pages/Topic';
import ZingChart from 'pages/ZingChart';
import Library from 'pages/Library';
import Playlist from 'pages/Library/Playlist';
import Detail from 'pages/Detail';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.topic, component: Topic },
  { path: config.routes.zingChart, component: ZingChart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.newMusic, component: NewMusic },
  { path: config.routes.top100, component: Top100 },
  { path: config.routes.detail, component: Detail },
  { path: config.routes.library.path, component: Library },
  { path: config.routes.library.history, component: History },
  { path: config.routes.library.favorite, component: Library },
  { path: config.routes.library.playlist, component: Playlist },
  { path: config.routes.library.album, component: Library },
  { path: config.routes.library.upload, component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
