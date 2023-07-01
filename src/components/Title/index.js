import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import classNames from 'classnames';

import './Title.scss';

function Title({ name, hideIcon, className, small, primary }) {
  const [play, setPlay] = useState(false);

  const classes = classNames('title', className, {
    'title--playing': play,
    'title--pause': !play,
    'title--small': small,
    'title--primary': primary,
  });

  return (
    <h1 className={classes}>
      <span className="title__text">{name}</span>
      {!hideIcon && (
        <span onClick={() => setPlay(!play)} className="title__icon">
          <BsPlayFill className="icon--play" />
          <BsPauseFill className="icon--pause" />
        </span>
      )}
    </h1>
  );
}

Title.propTypes = {
  name: PropTypes.string,
  hideIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default Title;
