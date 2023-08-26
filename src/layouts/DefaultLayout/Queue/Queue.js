import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { BsAlarm, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import './Queue.scss';
import { MediaItem, Button, Tabs } from 'components';
// import { songApi } from 'api';

function Queue({ isShowQueue }) {
  const { currentIndex, currentSong, recentSongs, tracks } = useSelector((state) => state.player);
  const [songList, setSongList] = useState([]);
  const [activeSong, setActiveSong] = useState({});

  useEffect(() => {
    setActiveSong(currentSong);
    setSongList(tracks.filter((item) => item._id !== currentSong._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, currentSong]);

  return (
    <aside className={`queue ${isShowQueue ? 'open' : ''}`}>
      <div className="queue-container">
        <div className="pt-4 pb-4 p-3 g-3 d-flex align-items-center">
          <Tabs
            secondary
            fullWidth
            tabs={[
              { id: 1, name: 'Danh sách phát' },
              { id: 2, name: 'Nghe gần đây' },
            ]}
          />
          <div className="ms-2">
            <Button secondary medium circle leftIcon={<BsAlarm />} />
            <Button secondary medium circle leftIcon={<BsThreeDots />} />
          </div>
        </div>
        {recentSongs &&
          recentSongs.map((item, index) => (
            <MediaItem key={index} tracks={songList} data={item} grow isQueue active />
          ))}
        {activeSong && <MediaItem tracks={songList} data={activeSong} grow isQueue active />}
        <div className="queue-main">
          <h2>Tiếp theo</h2>
          <p>
            Từ danh sách phát <a href="/">Chill</a>
          </p>
        </div>
        <div className="queue-list pe-3 ps-3">
          {songList.map((item, index) => (
            <MediaItem key={index} tracks={songList} data={item} grow isQueue active />
          ))}
        </div>
      </div>
    </aside>
  );
}

Queue.propTypes = {
  isShowQueue: PropTypes.bool,
};

export default memo(Queue);
