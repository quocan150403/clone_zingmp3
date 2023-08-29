import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { playlistApi } from 'api';
import { AlbumList } from 'components';

export default function PlaylistAll() {
  const { currentUser } = useSelector((state) => state.user);
  const [playlistList, setPlaylistList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser._id) {
          const { historyPlaylists } = currentUser;
          const resPlaylistList = await playlistApi.getByIds({
            ids: historyPlaylists.toString(),
            limit: 10,
          });
          setPlaylistList(resPlaylistList);
        }
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

  return <AlbumList showAdd albums={playlistList} />;
}
