import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { BsHeart, BsPlayFill, BsThreeDots } from 'react-icons/bs';

import images from 'assets/images';
import './Album.scss';

function AlbumItem({ data = {} }) {
  return (
    <Col>
      <div className="album">
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
            Mở Đầu Hoàn Hảo
          </Link>

          <p className="album-info__authors">
            <Link className="album-info__author">AMEE, </Link>
            <Link className="album-info__author">ERIK, </Link>
            <Link className="album-info__author">Hoàng Duyên</Link>
          </p>
        </div>
      </div>
    </Col>
  );
}

export default AlbumItem;
