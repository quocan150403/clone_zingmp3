import { memo } from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

function Wrapper({ children, className = 'pt-3 pb-3' }) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default memo(Wrapper);
