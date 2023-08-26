import { Link } from 'react-router-dom';

export default function MediaItemAlbum({ albumId }) {
  return (
    <span className="media-album">
      {albumId && <Link to={`/album/${albumId.slug}`}>{albumId.name}</Link>}
    </span>
  );
}
