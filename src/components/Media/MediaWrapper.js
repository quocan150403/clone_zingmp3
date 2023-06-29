import PropTypes from 'prop-types';
import { BsPlusCircle, BsThreeDots } from 'react-icons/bs';

import MediaItem from 'components/Media/MediaItem';
import './Media.scss';

function MediaWrapper({ MediaList }) {
  return (
    <div className="media-wrapper">
      <div className="media-wrapper__header d-flex align-items-center">
        <div className="media-wrapper__action">
          <div className="media-wrapper__checkbox">
            <div className="media-checkbox media-checkbox--all">
              <input className="media-checkbox__input" id="checkbox-all" type="checkbox" />
              <label className="media-checkbox__label" htmlFor="checkbox-all"></label>
            </div>
          </div>
          <button className="media-wrapper__add">
            <BsPlusCircle />
            <span>Thêm vào danh sách phát</span>
          </button>
          <button className="media-wrapper__option">
            <BsThreeDots />
          </button>
        </div>
        <span className="media-wrapper__song">Bài hát</span>
        <span>Thời lượng</span>
      </div>
      {MediaList.map((media, index) => (
        <MediaItem checkbox full index={index} key={index} media={media} />
      ))}
    </div>
  );
}

MediaWrapper.propTypes = {};

export default MediaWrapper;
