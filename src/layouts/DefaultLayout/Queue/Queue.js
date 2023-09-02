import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsAlarm, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import './Queue.scss';
import { songApi } from 'api';
import { MediaItem, Button, Tabs } from 'components';

const TABS = [
  { id: 1, name: 'Danh sách phát' },
  { id: 2, name: 'Nghe gần đây' },
];

function Queue({ isShowQueue }) {
  const { recentSongs, currentIndex, tracks, currentSong, album } = useSelector(
    (state) => state.player,
  );
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState(TABS[0]);
  const [songList, setSongList] = useState([]);

  const nextSongs = tracks
    .filter((item) => !recentSongs.some((recent) => recent._id === item._id))
    .slice(currentIndex)
    .concat(tracks.slice(0, currentIndex));
  const historySongs = recentSongs.slice(-4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { historySongs } = currentUser;
        if (historySongs.length <= 0) return;
        const newHistorySongs = historySongs.filter((item) => item !== currentSong._id);
        const resSongList = await songApi.getByIds({
          ids: newHistorySongs.toString(),
          limit: 10,
        });
        setSongList(resSongList);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
        } else {
          console.log('error! an error occurred. please try again later!');
        }
      }
    };
    fetchData();
  }, [currentUser]);

  return (
    <aside className={`queue ${isShowQueue ? 'open' : ''}`}>
      <div className="queue-container">
        <div className="pt-4 pb-4 p-3 g-3 d-flex align-items-center">
          <Tabs secondary fullWidth list={TABS} tab={tab} setTab={setTab} />

          <div className="ms-2">
            <Button secondary medium circle leftIcon={<BsAlarm />} />
            <Button secondary medium circle leftIcon={<BsThreeDots />} />
          </div>
        </div>
        {tab.id === 1 && (
          <>
            <div className="px-2">
              {historySongs &&
                historySongs.map((item, index) => (
                  <MediaItem key={index} tracks={historySongs} data={item} grow isQueue active />
                ))}
            </div>
            <div className="queue-main">
              <h2>Tiếp theo</h2>
              <p>
                Từ danh sách phát
                <Link to={`/album/${album?.slug}`}> {album?.name}</Link>
              </p>
            </div>
            <div className="queue-list px-2 pb-5">
              {nextSongs.map((item, index) => (
                <MediaItem key={index} tracks={nextSongs} data={item} grow isQueue active />
              ))}
            </div>
          </>
        )}
        {tab.id === 2 && (
          <div className="mx-2">
            {songList.map((item, index) => (
              <MediaItem key={index} tracks={songList} data={item} grow isQueue active />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

Queue.propTypes = {
  isShowQueue: PropTypes.bool,
};

export default memo(Queue);
