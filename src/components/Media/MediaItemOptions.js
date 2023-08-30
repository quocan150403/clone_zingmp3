import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import {
  BsArrowReturnRight,
  BsCollectionPlay,
  BsDownload,
  BsExclamationCircle,
  BsFillMicFill,
  BsHeadphones,
  BsHeart,
  BsHeartFill,
  BsLink45Deg,
  BsMusicNoteList,
  BsPlusCircle,
  BsPlusCircleDotted,
  BsTextWrap,
  BsThreeDots,
  BsThreeDotsVertical,
  BsTrash,
} from 'react-icons/bs';
import Wrapper from 'components/Wrapper/Wrapper';
import MenuItem from 'components/Wrapper/MenuItem/MenuItem';

export default function MediaItemOptions({
  isPlaylist,
  isShowOption,
  isFavoriteSong,
  imageUrl,
  onClickAdd,
  onClickLike,
  onClickOption,
  onClickHideTippyHeadless,
  onClickTrash,
}) {
  return (
    <div className="media-right">
      {!isPlaylist && (
        <Tippy content="Phát cùng lời bài hát">
          <span className="media-right__option media-right__option--mic">
            <BsFillMicFill />
          </span>
        </Tippy>
      )}
      <Tippy content="Thêm vào thư viện">
        <span
          onClick={onClickLike}
          className={`media-right__option media-right__option--heart ${
            isFavoriteSong ? 'active' : null
          }`}
        >
          {isFavoriteSong ? <BsHeartFill /> : <BsHeart />}
        </span>
      </Tippy>
      {isPlaylist && (
        <Tippy content="Thêm vào playlist">
          <span onClick={onClickAdd} className="media-right__option">
            <BsPlusCircleDotted />
          </span>
        </Tippy>
      )}
      {!isPlaylist && (
        <TippyHeadless
          visible={isShowOption}
          interactive={true}
          placement="right-end"
          offset={[-350, 2]}
          onClickOutside={onClickHideTippyHeadless}
          onHide={onClickHideTippyHeadless}
          appendTo={() => document.body}
          render={(attrs) => (
            <div {...attrs} tabIndex="-1" className="media-right__wrapper">
              <Wrapper className="pb-3 p-0">
                <div className="p-3 pb-0 d-flex align-items-center">
                  <img src={imageUrl} alt="" className="me-3 rounded is-40x40" />
                  <div className="d-flex flex-column">
                    <h4 className="media-title">Chưa Bao Giờ Em Quên</h4>
                    <div className="d-flex gap-3 media-description">
                      <span>
                        <BsHeart /> 207k
                      </span>
                      <span>
                        <BsHeadphones /> 207k
                      </span>
                    </div>
                  </div>
                </div>
                <div className="m-3 pb-0 mb-2 mt-3 d-flex align-items-center justify-content-center g-3 media-popper__group">
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                    <BsDownload />
                    Tải xuống
                  </div>
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                    <BsMusicNoteList />
                    Lời bài hát
                  </div>
                  <div className="d-flex w-100 flex-column justify-content-center align-items-center media-popper__item">
                    <BsExclamationCircle />
                    Chặn
                  </div>
                </div>
                <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                <MenuItem small option icon={<BsCollectionPlay />} title="Phát tiếp theo" />
                <MenuItem small option icon={<BsPlusCircle />} title="Thêm vào playlist" />
                <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
                {onClickTrash && (
                  <MenuItem
                    onClick={onClickTrash}
                    small
                    option
                    icon={<BsTrash />}
                    title="Xóa khỏi playlist"
                  />
                )}
              </Wrapper>
            </div>
          )}
        >
          <Tippy content="Khác">
            <span className="media-right__option media-right__option--more" onClick={onClickOption}>
              <BsThreeDots />
              <BsThreeDotsVertical />
            </span>
          </Tippy>
        </TippyHeadless>
      )}
    </div>
  );
}
