import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';
import './DefaultLayout.scss';
import images from 'assets/images';
import { useState } from 'react';
import Queue from './Queue/Queue';

function DefaultLayout({ children }) {
  const [isShowQueue, setIsShowQueue] = useState(false);

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
      <Player isShowQueue={isShowQueue} onChangeIsShowQueue={setIsShowQueue} />
      <Queue isShowQueue={isShowQueue} />
    </div>
  );
}

export default DefaultLayout;
