import { useState } from 'react';
import './DefaultLayout.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Player from './Player';
import images from 'assets/images';
import Queue from './Queue/Queue';
import { AddForm, DeleteForm, EditForm } from 'components/PlaylistForm';

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
      <AddForm />
      <EditForm />
      <DeleteForm />
    </div>
  );
}

export default DefaultLayout;
