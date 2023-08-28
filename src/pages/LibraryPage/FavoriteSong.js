import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { songApi } from 'api';
import { MediaList } from 'components';

export default function FavoriteSong() {
  const { currentUser } = useSelector((state) => state.user);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser._id) {
          const { favoriteSongs } = currentUser;
          const resSongList = await songApi.getByIds({
            ids: favoriteSongs.toString(),
            limit: 10,
          });
          setSongList(resSongList);
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

  return <MediaList tracks={songList} mediaList={songList} />;
}
