import { Link } from 'react-router-dom';
import { fDate, fRelativeTimeAgo } from 'utils/formatTime';

export default function MediaItemInfo({
  name,
  slug,
  link,
  artists,
  release,
  index,
  createdAt,
  rank,
}) {
  const Comp = link ? Link : 'h2';
  const to = link ? `/song/${slug}` : null;

  return (
    <div className="media-left__content">
      <div className="media-left__info">
        <Comp to={to} className="media-title">
          {name}
        </Comp>
        <div className="media-description">
          {artists &&
            artists.map((artist, index) => (
              <Link key={index} to={`/artist/${artist.slug}`}>
                {artist.name}
              </Link>
            ))}
        </div>
        {release && (
          <div className="media-description media-left__release">{fRelativeTimeAgo(createdAt)}</div>
        )}
      </div>
      {rank && (
        <div className="media-left__rank">
          <span className="media-left__order media-left__order--secondary">#{index + 1}</span>
          <span className="media-left__day">{fDate(createdAt)}</span>
        </div>
      )}
    </div>
  );
}
