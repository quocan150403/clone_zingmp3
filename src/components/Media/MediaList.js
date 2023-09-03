import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import {
  BsArrowDownUp,
  BsChevronRight,
  BsMusicNoteList,
  BsPlusCircle,
  BsThreeDots,
} from 'react-icons/bs';
import TippyHeadless from '@tippyjs/react/headless';

import { MediaItem, MenuItem, Wrapper } from 'components';
import './Media.scss';
import { useSelector } from 'react-redux';

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
  const { isEditFormOpen, currentPlaylist } = useSelector((state) => state.playlist);
  const [checkedList, setCheckedList] = useState([]);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isShowPlaylist, setIsShowPlaylist] = useState(false);

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
    <div className={`media-wrapper`}>
      {checkbox && (
        <div className="media-wrapper__header d-flex align-items-center">
          {checkedList.length > 0 ? (
            <div className="media-wrapper__action media-wrapper__first">
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
              <TippyHeadless
                visible={isShowOption}
                interactive={true}
                placement="right-end"
                offset={[-50, 2]}
                onClickOutside={() => setIsShowOption(false)}
                onHide={() => setIsShowOption(false)}
                appendTo={() => document.body}
                render={(attrs) => (
                  <Wrapper
                    {...attrs}
                    tabIndex="-1"
                    className="p-0"
                    onClick={() => setIsShowPlaylist(true)}
                  >
                    <MenuItem
                      small
                      option
                      icon={<BsPlusCircle />}
                      title="Thêm vào playlist"
                      iconExpand={<BsChevronRight />}
                    />
                  </Wrapper>
                )}
              >
                <button
                  onClick={() => setIsShowOption(!isShowOption)}
                  className="media-wrapper__option"
                >
                  <BsThreeDots />
                </button>
              </TippyHeadless>
              <TippyHeadless
                visible={isShowPlaylist}
                interactive={true}
                placement="right-end"
                offset={[-50, 2]}
                onClickOutside={() => setIsShowPlaylist(false)}
                onHide={() => setIsShowPlaylist(false)}
                appendTo={() => document.body}
                render={(attrs) => (
                  <Wrapper {...attrs} tabIndex="-1" className="p-0">
                    {currentPlaylist?.length &&
                      currentPlaylist.map((item) => (
                        <MenuItem small option icon={<BsMusicNoteList />} title={item.name} />
                      ))}
                  </Wrapper>
                )}
              />
            </div>
          ) : (
            <div className="media-wrapper__first">
              <span className="media-wrapper__sort">
                <BsArrowDownUp />
              </span>
              Bài hát
            </div>
          )}
          <div className="media-wrapper__second">Album</div>
          <div className="media-wrapper__third">Thời lượng</div>
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
