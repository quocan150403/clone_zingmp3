import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Modal from 'react-modal';

import './ArtistDashboard.scss';
import ArtistInfo from './ArtistInfo';
import { Button } from 'components';
import { BsHeadphones, BsHeart, BsLink45Deg, BsPencil, BsPlus, BsTrash } from 'react-icons/bs';
import images from 'assets/images';

function ArtistDashboard() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="artist-panel">
      <ArtistInfo />
      <ul className="artist-panel__list">
        <li className="active">Album 1</li>
        <li>Album 2</li>
        <li>Album 3</li>
      </ul>

      <div className="artist-panel__content">
        <div className="panel-album">
          <Row className="row-cols-5 g-4">
            <Col>
              <div onClick={() => setIsOpen(true)} className="panel-album__add">
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <BsPlus />
                  <span>Tạo Album mới</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="panel-album__item">
                <div className="panel-album__wrapper">
                  <img src={images.playlist.image} alt="" />
                  <div className="panel-album__overlay" />
                  <div className="panel-album__actions gap-2">
                    <div className="panel-album__icon">
                      <BsTrash />
                    </div>
                    <div className="panel-album__icon">
                      <BsPencil />
                    </div>
                    <div className="panel-album__icon large">
                      <BsLink45Deg />
                    </div>
                  </div>
                </div>
                <div className="panel-album__info">
                  <h2>Nhạc chill</h2>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>
                      <BsHeadphones /> 0
                    </span>
                    <span>
                      <BsHeart /> 0
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        className="modal-albums"
        overlayClassName="overlay"
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
        <h2 className="modal-albums__title text-center">Thêm vào Album</h2>
        <div className="d-flex align-items-center">
          <div className="modal-albums__img">
            <p>Cập nhật ảnh</p>
            {/* <img src={images.avatar} alt="" /> */}
            <div className="modal-albums__upload">Tải lên</div>
          </div>
          <div className="flex-grow-1">
            <div className="register-group">
              <label htmlFor="name">Tên Album</label>
              <input type="text" id="name" placeholder="Nhập tên" />
            </div>
            <div className="register-group">
              <label htmlFor="content2">Mô tả</label>
              <textarea type="text" id="content2" placeholder="Mô tả nội dung" />
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-end">
          <Button onClick={() => setIsOpen(false)} outline>
            Hủy
          </Button>
          <Button primary>Lưu</Button>
        </div>
      </Modal>
    </div>
  );
}

ArtistDashboard.propTypes = {};

export default ArtistDashboard;
