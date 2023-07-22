import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import './DefaultLayout.scss';
import images from 'assets/images';

function DefaultLayout({ children }) {
  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${images.background})`,
      }}
    >
      <Header />
      <Sidebar />
      <main className="app-content">{children}</main>
      {/* <Player /> */}
    </div>
  );
}

export default DefaultLayout;
