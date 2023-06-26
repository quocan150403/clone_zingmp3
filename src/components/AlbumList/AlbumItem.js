import images from 'assets/images';
import React from 'react';

function AlbumItem({ data = {} }) {
  return (
    <div className="col">
      <div className="row__item-container">
        <div className="row__item-display br-5">
          <div
            className="row__item-img img--square"
            style={{
              backgroundImage: `url(${images.playlist.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="row__item-actions">
            <div className="action-btn btn--heart">
              <i className="btn--icon icon--heart bi bi-heart"></i>
            </div>
            <div className="btn--play-playlist">
              <div className="control-btn btn-toggle-play">
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
            <div className="action-btn">
              <i className="btn--icon bi bi-three-dots"></i>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="row__item-info explore-playlist--info">
          <a href="#" className="row__info-name is-oneline">
            Mở Đầu Hoàn Hảo
          </a>

          <p className="info__artist">
            <a href="#" className="is-ghost">
              AMEE
            </a>
            ,
            <a href="#" className="is-ghost">
              ERIK
            </a>
            ,
            <a href="#" className="is-ghost">
              Hoàng Duyên
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlbumItem;
