import './DefaultLayout.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="app__content">{children}</main>
      <Player />
    </>
  );
}

export default DefaultLayout;
