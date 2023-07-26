import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import classNames from 'classnames';

import './Title.scss';

function Title({ sub, hideIcon, className, small, large, primary, children }) {
  const [play, setPlay] = useState(false);

  const classes = classNames('title', className, {
    'title--playing': play,
    'title--pause': !play,
    'title--small': small,
    'title--large': large,
    'title--primary': primary,
  });

  let Comp = 'h1';
  if (sub) Comp = 'h2';

  return (
    <div className={classes}>
      <Comp className="title__text">{children}</Comp>
      {!hideIcon && (
        <span onClick={() => setPlay(!play)} className="title__icon">
          <BsPlayFill className="icon--play" />
          <BsPauseFill className="icon--pause" />
        </span>
      )}
    </div>
  );
}

Title.propTypes = {
  name: PropTypes.string,
  hideIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default Title;
