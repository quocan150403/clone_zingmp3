import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { MediaList, Title, Tabs, Helmet, AlbumList } from 'components';
import { albumApi, playlistApi, songApi } from 'api';

const TABS = [
  { id: 0, name: 'Bài hát' },
  { id: 1, name: 'Album' },
  { id: 2, name: 'Playlist' },
];

export default function HistoryPage() {
  const [tab, setTab] = useState(TABS[0]);
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData([]);
        if (currentUser._id) {
          const { favoriteAlbums, favoriteSongs, historyPlaylists } = currentUser;
          let resValue = [];
          if (tab.id === 0) {
            resValue = await songApi.getByIds({ ids: favoriteSongs.toString(), limit: 10 });
          } else if (tab.id === 1) {
            resValue = await albumApi.getByIds({ ids: favoriteAlbums.toString(), limit: 10 });
          } else if (tab.id === 2) {
            resValue = await playlistApi.getByIds({ ids: historyPlaylists.toString(), limit: 10 });
          }
          setData(resValue);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchData();
  }, [currentUser, tab]);

  return (
    <Helmet title="Lịch sử">
      <div className="history">
        <div className="is-border-bottom d-flex align-items-center">
          <Title className="mb-0" small hideIcon>
            Phát gần đây
          </Title>
          <div className="vertical-separator" />
          <Tabs uppercase list={TABS} tab={tab} setTab={setTab} />
        </div>
        <div className="history-content mt-4 mb-4 mh-100">
          {tab.id === 0 && data && <MediaList tracks={data} mediaList={data} />}
          {(tab.id === 1 || tab.id === 2) && data && <AlbumList albums={data} />}
        </div>
      </div>
    </Helmet>
  );
}
