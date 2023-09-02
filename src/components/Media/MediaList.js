import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { BsArrowDownUp, BsPlusCircle, BsThreeDots } from 'react-icons/bs';

import { MediaItem } from 'components';
import './Media.scss';

function MediaList({
  tracks,
  mediaList,
  isPlaylist,
  isMusicIcon = true,
  checkbox = true,
  onAddPlaylist,
  onRemovePlaylist,
  ...props
}) {
  const [checkedList, setCheckedList] = useState([]);

  const handleCheck = (index) => {
    setCheckedList((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };

  const handleToggleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckedList(mediaList.map((item, index) => index));
    } else {
      setCheckedList([]);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className={`media-wrapper ${checkedList.length > 0 ? 'show-action' : ''}`}>
      {checkbox && (
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
      )}
      {mediaList.map((media, index) => (
        <MediaItem
          props
          key={index}
          tracks={tracks || mediaList}
          data={media}
          isMusicIcon={isMusicIcon}
          checkbox={checkbox}
          isBorder
          showAlbum
          isPlaylist={isPlaylist}
          index={index}
          checkedList={checkedList}
          onChangeChecked={handleCheck}
          onAddPlaylist={onAddPlaylist}
          onRemovePlaylist={onRemovePlaylist}
        />
      ))}
    </div>
  );
}

MediaList.propTypes = {
  mediaList: PropTypes.array.isRequired,
};

export default memo(MediaList);
