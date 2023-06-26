import React from 'react';
import './Popper.scss';

function Popper({ children, className = 'pt-3 pb-3' }) {
  return <div className={`popper ${className}`}>{children}</div>;
}

Popper.propTypes = {};

export default Popper;
