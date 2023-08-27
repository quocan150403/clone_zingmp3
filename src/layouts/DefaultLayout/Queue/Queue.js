import { memo } from 'react';
import PropTypes from 'prop-types';
import { BsAlarm, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import './Queue.scss';
import { MediaItem, Button, Tabs } from 'components';

function Queue({ isShowQueue }) {
  const { recentSongs, currentIndex, tracks } = useSelector((state) => state.player);

  const nextSongs = tracks
    .filter((item) => !recentSongs.some((recent) => recent._id === item._id))
    .slice(currentIndex)
    .concat(tracks.slice(0, currentIndex));
  const historySongs = recentSongs.slice(-4);

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
        <div className="px-2">
          {historySongs &&
            historySongs.map((item, index) => (
              <MediaItem key={index} tracks={historySongs} data={item} grow isQueue active />
            ))}
        </div>
        <div className="queue-main">
          <h2>Tiếp theo</h2>
          <p>
            Từ danh sách phát <a href="/">Chill</a>
          </p>
        </div>
        <div className="queue-list pe-3 ps-3">
          {nextSongs.map((item, index) => (
            <MediaItem key={index} tracks={nextSongs} data={item} grow isQueue active />
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
