import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './DefaultLayout.scss';
import { AddForm, DeleteForm, EditForm } from 'components/PlaylistForm';
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';
import Queue from './Queue/Queue';

function DefaultLayout({ children }) {
  const { tracks } = useSelector((state) => state.player);
  const [isShowQueue, setIsShowQueue] = useState(false);

  const hasPlayer = tracks.length > 0 ? 'has-player' : null;

  return (
    <div className={`app-container ${hasPlayer}`}>
      <Header />
      <Sidebar />
      <main className="app-content">{children}</main>
      <Player isShowQueue={isShowQueue} onChangeIsShowQueue={setIsShowQueue} />
      <Queue isShowQueue={isShowQueue} />

      <ToastContainer />
      <AddForm />
      <EditForm />
      <DeleteForm />
    </div>
  );
}

export default DefaultLayout;
