import { songApi } from 'api';
import { MediaItem, MediaList, Nodata } from 'components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function SongHistory() {
  const { currentUser } = useSelector((state) => state.user);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { historySongs } = currentUser;
        if (historySongs.length > 0) {
          const resSongList = await songApi.getByIds({
            ids: historySongs.toString(),
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
    songList.map((item, index) => (
      <MediaItem
        full
        isBorder
        showAlbum
        index={index}
        key={item._id}
        data={item}
        tracks={songList}
      />
    ))
  ) : (
    <Nodata message="Không có bài hát nào" />
  );
}
