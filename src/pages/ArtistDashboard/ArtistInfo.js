import React from 'react';
import PropTypes from 'prop-types';
import images from 'assets/images';
import { Button } from 'components';
import { BsHeadphones, BsShare, BsUpload } from 'react-icons/bs';

function ArtistInfo(props) {
  return (
    <div className="panel-info d-flex align-content-center justify-content-between">
      <div className="d-flex">
        <div className="panel-info__avatar">
          <img src={images.avatar} alt="" />
        </div>
        <div className="d-flex flex-column">
          <h2 className="panel-info__name">Trần Thị Thanh Thảo</h2>
          <div className="d-flex align-items-center">
            <Button outline leftIcon={<BsShare />}>
              Đến trang nghệ sĩ
            </Button>
            <Button primary leftIcon={<BsUpload />}>
              Tải bài hát mới
            </Button>
          </div>
        </div>
      </div>
      <div className="me-4 d-flex flex-column align-items-end justify-content-center">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-end">
            <p className="panel-info__title">Tổng lược nghe</p>
            <h2 className="panel-info__number">0</h2>
          </div>
          <div className="panel-info__icon d-flex align-items-center justify-content-center">
            <BsHeadphones />
          </div>
        </div>
        <div className="d-flex align-items-center mt-4 pt-2">
          <div className="d-flex flex-column align-items-end">
            <p className="panel-info__title">Tổng lược nghe</p>
            <h2 className="panel-info__number">0</h2>
          </div>
          <div className="panel-info__icon d-flex align-items-center justify-content-center">
            <BsHeadphones />
          </div>
        </div>
      </div>
    </div>
  );
}

ArtistInfo.propTypes = {};

export default ArtistInfo;
