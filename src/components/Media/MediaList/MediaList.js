import {
  BsArrowDownUp,
  BsChevronRight,
  BsMusicNoteList,
  BsPlusCircle,
  BsPlusSquare,
  BsThreeDots,
  BsTrash,
} from 'react-icons/bs';
import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openAddForm } from 'app/features/playlistSlice';
import TippyHeadless from '@tippyjs/react/headless';

import './MediaList.scss';
import { MediaItem, MenuItem, Wrapper } from 'components';
import { toast } from 'react-toastify';
import { playlistApi } from 'api';

const FIELDS = [
  {
    id: 1,
    label: 'Mặc định',
    field: '',
  },
];

function MediaList({
  tracks,
  mediaList,
  setMediaList,
  isShowActionsPlaylist,
  isMusicIcon = true,
  checkbox = true,
  onAddPlaylist,
  onRemovePlaylist,
  onRemoveList,
  ...props
}) {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlist);

  const [checkedList, setCheckedList] = useState([]);
  const [isShowOption, setIsShowOption] = useState(false);
  const [isShowPlaylist, setIsShowPlaylist] = useState(false);
  const [isShowSort, setIsShowSort] = useState(false);
  const [field, setField] = useState(false);

  const handleShowAddPlaylist = () => {
    setIsShowOption(false);
    setIsShowPlaylist(false);
    dispatch(openAddForm());
  };

  const handleCheck = (id) => {
    setCheckedList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleToggleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckedList(mediaList.map((item) => item._id));
    } else {
      setCheckedList([]);
    }
  };

  const handleAddSongsToPlaylist = async (idPlaylist) => {
    setIsShowOption(false);
    setIsShowPlaylist(false);
    try {
      await toast.promise(playlistApi.addSongsToPlaylist(idPlaylist, checkedList), {
        pending: 'Đag thêm...',
      });
      toast.dismiss();
      toast.success(`Đã thêm tất cả bài hát vào playlist thành công.`);
    } catch (error) {
      console.log(error);
      toast.error('Thêm thất bại');
    }
  };

  // const handleSort = () => {
  //   const sortedList = [...mediaList];

  //   sortedList.sort((a, b) => {
  //     const nameA = a.name.toLowerCase();
  //     const nameB = b.name.toLowerCase();

  //     if (nameA < nameB) {
  //       return isAsc ? -1 : 1;
  //     }
  //     if (nameA > nameB) {
  //       return isAsc ? 1 : -1;
  //     }
  //     return 0;
  //   });

  //   setIsAsc(!isAsc);
  //   setMediaList(sortedList);
  // };

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
              <button className="media-wrapper__add">
                <BsPlusCircle />
                <span>Thêm vào danh sách phát</span>
              </button>
              <TippyHeadless
                visible={isShowOption}
                interactive={true}
                placement="right-end"
                offset={[-50, 2]}
                onHide={() => setIsShowOption(false)}
                appendTo={() => document.body}
                render={(attrs) => (
                  <TippyHeadless
                    visible={isShowPlaylist}
                    interactive={true}
                    placement="right-end"
                    offset={[-170, 2]}
                    onClickOutside={() => {
                      setIsShowOption(false);
                      setIsShowPlaylist(false);
                    }}
                    onHide={() => setIsShowPlaylist(false)}
                    appendTo={() => document.body}
                    render={(attrs) => (
                      <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0 mh-260 mw-230">
                        <MenuItem
                          onClick={handleShowAddPlaylist}
                          option
                          icon={<BsPlusSquare />}
                          title="Thêm playlist mới"
                        />
                        {playlists?.length &&
                          playlists.map((item) => (
                            <MenuItem
                              small
                              option
                              key={item._id}
                              title={item.name}
                              icon={<BsMusicNoteList />}
                              onClick={() => handleAddSongsToPlaylist(item._id)}
                            />
                          ))}
                      </Wrapper>
                    )}
                  >
                    <Wrapper {...attrs} tabIndex="-1" className="p-0">
                      <MenuItem
                        small
                        option
                        icon={<BsPlusCircle />}
                        title="Thêm vào playlist"
                        iconExpand={<BsChevronRight />}
                        onMouseEnter={() => setIsShowPlaylist(true)}
                      />
                      {!!onRemoveList && (
                        <MenuItem
                          small
                          option
                          icon={<BsTrash />}
                          title="Xóa khỏi playlist này"
                          onClick={() => {
                            setIsShowOption(false);
                            setIsShowPlaylist(false);
                            onRemoveList(checkedList);
                          }}
                          onMouseEnter={() => setIsShowPlaylist(false)}
                        />
                      )}
                    </Wrapper>
                  </TippyHeadless>
                )}
              >
                <button
                  onClick={() => setIsShowOption(!isShowOption)}
                  className="media-wrapper__option"
                >
                  <BsThreeDots />
                </button>
              </TippyHeadless>
            </div>
          ) : (
            <div className="media-wrapper__first">
              <TippyHeadless
                visible={isShowSort}
                interactive={true}
                placement="bottom-start"
                offset={[0, 8]}
                onClickOutside={() => setIsShowSort(false)}
                onHide={() => setIsShowSort(false)}
                appendTo={() => document.body}
                render={(attrs) => (
                  <Wrapper {...attrs} tabIndex="-1" className="p-1 mw-126">
                    <MenuItem small option title="Mặc định" />
                    <MenuItem small option title="Tên bài hát (A-Z)" />
                    <MenuItem small option title="Tên ca sĩ (A-Z)" />
                    <MenuItem small option title="Tên album (A-Z)" />
                  </Wrapper>
                )}
              >
                <span onClick={() => setIsShowSort(!isShowSort)} className="media-wrapper__sort">
                  <BsArrowDownUp />
                </span>
              </TippyHeadless>
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
          index={index}
          checkedList={checkedList}
          onChangeChecked={handleCheck}
          isShowActionsPlaylist={isShowActionsPlaylist}
          onAddPlaylist={onAddPlaylist}
          onRemovePlaylist={onRemovePlaylist}
          {...props}
        />
      ))}
    </div>
  );
}

MediaList.propTypes = {
  mediaList: PropTypes.array.isRequired,
};

export default memo(MediaList);
