import { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="app-container">{children}</main>
      <Player />
    </>
  );
}

export default DefaultLayout;
