import config from 'config';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Favorite from 'pages/Favorite';
import History from 'pages/History';
import NewMusic from 'pages/NewMusic';
import Library from 'pages/Library';
import Radio from 'pages/Radio';
import Top100 from 'pages/Top100';
import Topic from 'pages/Topic';
import ZingChart from 'pages/ZingChart';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.topic, component: Topic },
  { path: config.routes.zingChart, component: ZingChart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.library, component: Library },
  { path: config.routes.newMusic, component: NewMusic },
  { path: config.routes.top100, component: Top100 },
  { path: config.routes.history, component: History },
  { path: config.routes.favorite, component: Favorite },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
