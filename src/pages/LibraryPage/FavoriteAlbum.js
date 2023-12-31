import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { albumApi } from 'api';
import { AlbumList, Nodata } from 'components';

export default function FavoriteALbum() {
  const { currentUser } = useSelector((state) => state.user);
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { favoriteAlbums } = currentUser;
        if (favoriteAlbums.length) {
          const resAlbumList = await albumApi.getByIds({
            ids: favoriteAlbums.toString(),
            limit: 10,
          });
          setAlbumList(resAlbumList);
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

  return albumList?.length ? (
    <AlbumList albums={albumList} />
  ) : (
    <Nodata message="Không có album nào" />
  );
}
