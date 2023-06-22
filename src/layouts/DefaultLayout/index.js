import Header from 'components/Header';
import './DefaultLayout.scss';
import Sidebar from 'components/Sidebar';
import Player from 'components/Player';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="w-100">{children}</main>
      <Player />
    </>
  );
}

export default DefaultLayout;
