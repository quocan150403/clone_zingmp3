import { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Queue from 'layouts/components/Queue';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
  const [isShowQueue, setIsShowQueue] = useState(false);

  const handleShowQueue = () => {
    setIsShowQueue(!isShowQueue);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <main className="app-container">{children}</main>
      <Player handleShowQueue={handleShowQueue} />
      <Queue isShowQueue={isShowQueue} />
    </>
  );
}

export default DefaultLayout;
