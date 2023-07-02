import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsHeart, BsPlayFill, BsThreeDots } from 'react-icons/bs';
import classNames from 'classnames';

import images from 'assets/images';
import './Album.scss';
import Button from 'components/Button';

function AlbumItem({ data, small, detail }) {
  const classes = classNames('album', {
    detail,
    small,
  });
  return (
    <div className={classes}>
      <div className="album-wrapper br-5">
        <img className="album-wrapper__image" src={images.playlist.image} alt="" />
        <div className="album-wrapper__actions">
          <div className="album-wrapper__btn">
            <BsHeart />
          </div>
          <div className="album-wrapper__btn album-wrapper__btn--play">
            <BsPlayFill />
          </div>
          <div className="album-wrapper__btn">
            <BsThreeDots />
          </div>
        </div>
        <div className="album-wrapper__overlay" />
      </div>
      <div className="album-info">
        <Link href="/" className="album-info__title">
          Mở Đầu Hoàn Hảo Mở Đầu Hoàn Hảo Mở Đầu Hoàn Hảo Mở Đầu Hoàn Hảo
        </Link>
        {detail && <p className="album-info__authors mb-2">Cập nhật: 2 ngày trước</p>}
        <p className="album-info__authors mb-2">
          <Link className="album-info__author">AMEE, </Link>
          <Link className="album-info__author">ERIK, </Link>
          <Link className="album-info__author">Hoàng Duyên</Link>
        </p>
        {detail && (
          <div>
            <p className="album-info__authors mb-5">81k người yêu thích</p>
            <Button primary uppercase leftIcon={<BsPlayFill />}>
              Phát tất cả
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  data: PropTypes.object,
  props: PropTypes.object,
};

export default AlbumItem;
