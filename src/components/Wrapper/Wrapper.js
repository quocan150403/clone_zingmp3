import { memo } from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

function Wrapper({ children, className = 'pt-3 pb-3', ...props }) {
  return (
    <div className={`wrapper ${className}`} {...props}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default memo(Wrapper);
