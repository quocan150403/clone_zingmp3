import {
  BsArrowReturnRight,
  BsDownload,
  BsHeart,
  BsHeartFill,
  BsLink45Deg,
  BsPlayFill,
  BsTextWrap,
  BsThreeDots,
} from 'react-icons/bs';
import { useState, memo, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';

import { Button, MenuItem, Wrapper } from 'components';
import './Album.scss';
import images from 'assets/images';
import { fDate } from 'utils/formatTime';

function AlbumItem({
  data,
  small,
  detail,
  isArtist,
  isFavoriteAlbum,
  type = 'album',
  onClickLike,
}) {
  const { albumId, isPlaying } = useSelector((state) => state.player);
  const [isShowOption, setIsShowOption] = useState(false);

  const classes = classNames('album', {
    detail,
    small,
    active: albumId === data._id && isPlaying,
    'is-artist': isArtist,
  });

  return (
    <div className={classes}>
      <Link to={`/${type}/${data.slug}`} className="album-wrapper br-5">
        <img className="album-wrapper__image" src={data.imageUrl || images.albumDefault} alt="" />
        <div className="album-wrapper__actions">
          <Tippy content="Thêm vào thư viện">
            <div className="album-wrapper__btn">
              <BsHeart />
            </div>
          </Tippy>
          <div className="album-wrapper__btn album-wrapper__btn--play">
            <BsPlayFill className="album-icon__play" />
            <img className="album-icon__playing" src={images.iconPlaying} alt="" />
          </div>
          <TippyHeadless
            visible={isShowOption}
            interactive={true}
            placement="bottom-end"
            offset={[0, 10]}
            onClickOutside={() => setIsShowOption(false)}
            onHide={() => setIsShowOption(false)}
            appendTo={() => document.body}
            render={(attrs) => (
              <Wrapper {...attrs} tabIndex="-1" className="pb-3 pt-3 p-0">
                <MenuItem small option icon={<BsTextWrap />} title="Thêm vào danh sách phát" />
                <MenuItem small option icon={<BsDownload />} title="Tải xuống" />
                <MenuItem small option icon={<BsLink45Deg />} title="Sao chép link" />
                <MenuItem small option icon={<BsArrowReturnRight />} title="Chia sẻ" />
              </Wrapper>
            )}
          >
            <Tippy content="Khác">
              <div className="album-wrapper__btn" onClick={() => setIsShowOption(!isShowOption)}>
                <BsThreeDots />
              </div>
            </Tippy>
          </TippyHeadless>
        </div>
        <div className="album-wrapper__overlay" />
      </Link>
      <div className="album-info">
        {isArtist ? <p className="album-info__type mb-2">Singer</p> : null}
        <Link href="/" className="album-info__title">
          {data.name}
        </Link>
        {detail && <p className="album-info__likes">Cập nhật: {fDate(data.updatedAt)} </p>}
        <p className="album-info__authors">
          {data.artists &&
            data.artists.map((item, index) => (
              <Fragment key={index}>
                {index > 0 && ', '}
                <Link to={`/artist/${item.slug}`} className="album-info__author">
                  {item.name}
                </Link>
              </Fragment>
            ))}
        </p>
        {isArtist && <p className="album-info__type mb-0 mt-3">{fDate(data.createdAt)}</p>}

        {detail && (
          <div>
            <p className="album-info__likes mb-4">{data.favorites} người yêu thích</p>
            <Button primary uppercase leftIcon={<BsPlayFill />}>
              Phát tất cả
            </Button>
            <div className="mt-4">
              <Button
                onClick={onClickLike}
                circle
                secondary
                medium
                leftIcon={isFavoriteAlbum ? <BsHeartFill /> : <BsHeart />}
              />
              <Button circle secondary medium leftIcon={<BsThreeDots />} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  data: PropTypes.object,
  props: PropTypes.object,
  small: PropTypes.bool,
  detail: PropTypes.bool,
  onClickLike: PropTypes.any,
};

export default memo(AlbumItem);
