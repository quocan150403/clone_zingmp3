import PropTypes from 'prop-types';
import MediaItem from 'components/Media/MediaItem';
import './Media.scss';

function MediaWrapper({ MediaList }) {
  return (
    <div className="media-wrapper">
      {MediaList.map((media) => (
        <MediaItem key={media.id} media={media} />
      ))}
    </div>
  );
}

MediaWrapper.propTypes = {};

export default MediaWrapper;
