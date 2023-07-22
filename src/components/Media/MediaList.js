import PropTypes from 'prop-types';
import { BsArrowDownUp, BsPlusCircle, BsThreeDots } from 'react-icons/bs';

import MediaItem from 'components/Media/MediaItem';
import './Media.scss';
import { useState } from 'react';

function MediaList({ MediaList }) {
  const [arrayCheck, setArrayCheck] = useState([]);

  const handleCheck = (index) => {
    setArrayCheck((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  const handleToggleCheckAll = (e) => {
    if (e.target.checked) {
      setArrayCheck(MediaList.map((item, index) => index));
    } else {
      setArrayCheck([]);
    }
  };

  const handleSubmit = () => {
    console.log(arrayCheck);
  };

  return (
    <div className={`media-wrapper ${arrayCheck.length > 0 ? 'show-action' : ''}`}>
      <div className="media-wrapper__header d-flex align-items-center">
        <div className="media-wrapper__action">
          <div className="media-wrapper__checkbox">
            <div className="media-checkbox media-checkbox--all">
              <input
                id="checkbox-all"
                type="checkbox"
                className="media-checkbox__input"
                onChange={(e) => handleToggleCheckAll(e)}
              />
              <label className="media-checkbox__label" htmlFor="checkbox-all"></label>
            </div>
          </div>
          <button onClick={handleSubmit} className="media-wrapper__add">
            <BsPlusCircle />
            <span>Thêm vào danh sách phát</span>
          </button>
          <button className="media-wrapper__option">
            <BsThreeDots />
          </button>
        </div>

        <span className="media-wrapper__song">
          <span className="media-wrapper__sort">
            <BsArrowDownUp />
          </span>
          Bài hát
        </span>
        <span className="media-wrapper__amount">Thời lượng</span>
      </div>
      {MediaList.map((media, index) => (
        <MediaItem
          tracks={MediaList}
          data={media}
          checkbox
          isBorder
          showAlbum
          key={index}
          index={index}
          media={media}
          arrayCheck={arrayCheck}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}

MediaList.propTypes = {
  MediaList: PropTypes.array.isRequired,
};

export default MediaList;
