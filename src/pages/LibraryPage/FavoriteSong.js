import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { songApi } from 'api';
import { MediaList, Nodata } from 'components';

export default function FavoriteSong() {
  const { currentUser } = useSelector((state) => state.user);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { favoriteSongs } = currentUser;
        if (favoriteSongs.length) {
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

  return songList?.length ? (
    <MediaList mediaList={songList} checkbox />
  ) : (
    <Nodata message="Không có bài hát nào" />
  );
}
