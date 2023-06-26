import images from 'assets/images';
import React from 'react';

function RadioItem({ data = {} }) {
  return (
    <div className="row__item-container flex--top-left">
      <div className="item--has-attach">
        <svg className="svg row__item-frame" fill="transparent" width="100%" height="100%" viewBox="0 0 100 100">
          <circle
            className="svg-circle-bg"
            stroke="rgba(255, 255, 255, 0.2)"
            cx="50"
            cy="50"
            r="48.75"
            strokeWidth="2.5"
          ></circle>
          <circle
            className="svg-circle"
            stroke="#ff4b4a"
            cx="50"
            cy="50"
            r="48.75"
            strokeWidth="2.5"
            strokeDasharray="306.3052837250048"
            strokeDashoffset="155.1120299698101"
            style={{
              transition: 'stroke-dashoffset 850ms ease-in-out 0s',
            }}
          ></circle>
        </svg>
        <div className="row__item-display is-rounded">
          <div
            className="row__item-img img--square is-rounded"
            style={{
              backgroundImage: `url(${images.radio.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
            }}
          ></div>
          <div className="row__item-actions hide-on-mobile">
            <div className="btn--play-playlist">
              <div className="control-btn btn-toggle-play">
                <i className="bi bi-play-fill icon-play"></i>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="radio__label">LIVE</div>
        <div className="radio__logo is-rounded">
          <div
            className="radio__logo-img"
            style={{
              backgroundImage: `url(${images.radio.logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
      <div className="row__item-info media radio--info">
        <div className="media__left">
          <div className="media__info text-center">
            <span className="info__title is-active is-oneline">Xone Radio</span>
            <h3 className="row__info-creator text-center">476 đang nghe</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioItem;
