import Tippy from '@tippyjs/react';
import {
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsHeartFill,
  BsLink45Deg,
  BsPen,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
  BsTrash,
  BsXLg,
} from 'react-icons/bs';
import TippyHeadless from '@tippyjs/react/headless';
import images from 'assets/images';
import Wrapper from 'components/Wrapper';
import MenuItem from 'components/Wrapper/MenuItem';

export default function AlbumActions({
  hideLikeBtn,
  hideMoreBtn,
  isPlaylist,
  isShowOption,
  isFavoriteAlbum,
  onHide,
  onClickHeart,
  onClickEditBtn,
  onClickDeleteBtn,
  onClickPlay,
  onShowOption,
}) {
  return (
    <div className="album__wrapper-actions">
      {!hideLikeBtn && (
        <Tippy content="Thêm vào thư viện">
          <div onClick={onClickHeart} className="album__wrapper-btn">
            {isFavoriteAlbum ? <BsHeartFill /> : <BsHeart />}
          </div>
        </Tippy>
      )}
      {isPlaylist && (
        <Tippy content="Xóa playlist">
          <div onClick={onClickDeleteBtn} className="album__wrapper-btn">
            <BsXLg />
          </div>
        </Tippy>
      )}
      <div onClick={onClickPlay} className="album__wrapper-btn album__wrapper-btn--play">
        <BsPlayFill className="album-icon__play" />
        <img className="album-icon__playing" src={images.iconPlaying} alt="" />
      </div>
      {!hideMoreBtn && (
        <TippyHeadless
          visible={isShowOption}
          interactive={true}
          placement="bottom-end"
          offset={[0, 10]}
          onClickOutside={onHide}
          onHide={onHide}
          appendTo={() => document.body}
          render={(attrs) => (
            <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
              <MenuItem medium option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
              <MenuItem medium option icon={<BsDownload />} title="Tải xuống" />
              <MenuItem medium option icon={<BsLink45Deg />} title="Sao chép link" />
              <MenuItem medium option icon={<BsArrowReturnRight />} title="Chia sẻ" />
              {isPlaylist && (
                <>
                  <MenuItem
                    small
                    option
                    icon={<BsPen />}
                    title="Chỉnh sửa playlist"
                    onClick={onClickEditBtn}
                  />
                  <MenuItem
                    small
                    option
                    icon={<BsTrash />}
                    title="Xóa playlist"
                    onClick={onClickDeleteBtn}
                  />
                </>
              )}
            </Wrapper>
          )}
        >
          <Tippy content="Khác">
            <div className="album__wrapper-btn" onClick={onShowOption}>
              <BsThreeDots />
            </div>
          </Tippy>
        </TippyHeadless>
      )}
    </div>
  );
}
