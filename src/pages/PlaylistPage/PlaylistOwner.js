import { useSelector, useDispatch } from 'react-redux';
import { AlbumList } from 'components';
import { openAddForm } from 'app/features/playlistSlice';

export default function PlaylistOwner() {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlist);

  const handleAddPlaylist = () => {
    dispatch(openAddForm());
  };

  return (
    <AlbumList
      showAdd
      hideLikeBtn
      type="playlist"
      albums={playlists}
      onClickAdd={handleAddPlaylist}
    />
  );
}
