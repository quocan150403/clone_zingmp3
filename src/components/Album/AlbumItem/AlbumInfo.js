import Button from 'components/Button';
import React, { Fragment } from 'react';
import { BsHeart, BsHeartFill, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fDate } from 'utils/formatTime';
import AlbumOption from './AlbumOption';

function AlbumInfo({
  isArtist,
  type,
  data,
  detail,
  small,
  isPlaying,
  isShowOption,
  isFavoriteAlbum,
  onClickPlay,
  onClickHeart,
  onHideOption,
  onShowOption,
}) {
  return (
    <div className="album-info">
      {isArtist ? <p className="album-info__type mb-2">Singer</p> : null}
      <Link to={`/${type}/${data.slug}`} className="album-info__title">
        {data.name}
      </Link>
      {detail && <p className="album-info__likes">Cập nhật: {fDate(data.updatedAt)} </p>}
      {!small && (
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
      )}
      {isArtist && <p className="album-info__type mb-0 mt-3">{fDate(data.createdAt)}</p>}

      {detail && (
        <div>
          <p className="album-info__likes mb-4">{data.favorites} người yêu thích</p>
          <Button
            onClick={onClickPlay}
            className="mt-3"
            primary
            uppercase
            leftIcon={isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          >
            {isPlaying ? 'Tạm dừng' : 'Phát tất cả'}
          </Button>
          <div className="mt-4 gap-3 d-flex align-items-center justify-content-center ">
            <Button
              onClick={onClickHeart}
              circle
              secondary
              medium
              leftIcon={isFavoriteAlbum ? <BsHeartFill /> : <BsHeart />}
            />
            {detail && (
              <AlbumOption
                isShowOption={isShowOption}
                onHide={onHideOption}
                onShowOption={onShowOption}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AlbumInfo;
