import { BsPlayFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { memo } from 'react';

import images from 'assets/images';
import { RadioCircleIcon } from 'components/Icons';
import './Radio.scss';

function RadioItem({ data = {} }) {
  return (
    <div className="radio">
      <div className="radio-wrapper">
        <RadioCircleIcon className="radio-wrapper__circle" />

        <div className="radio-wrapper__image">
          <img src={images.radio.image} alt="" />
          <div className="radio-wrapper__action">
            <BsPlayFill />
          </div>
          <div className="radio-wrapper__overlay" />
        </div>

        <div className="radio-wrapper__label">LIVE</div>
        <div className="radio-wrapper__logo">
          <img src={images.radio.logo} alt="" />
        </div>
      </div>

      <div className="radio-info">
        <h3 className="radio-info__title">Xone Radio</h3>
        <div className="radio-info__creator">476 đang nghe</div>
      </div>
    </div>
  );
}

RadioItem.propTypes = {
  data: PropTypes.object,
};

export default memo(RadioItem);
