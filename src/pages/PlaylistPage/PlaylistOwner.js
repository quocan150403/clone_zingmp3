import { useSelector } from 'react-redux';
import { AlbumList } from 'components';

export default function PlaylistOwner() {
  const { playlists } = useSelector((state) => state.playlist);
  return <AlbumList showAdd albums={playlists} />;
}
