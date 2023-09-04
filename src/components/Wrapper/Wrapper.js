import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

const Wrapper = forwardRef(({ children, className = 'pt-3 pb-3', ...props }, ref) => {
  return (
    <div ref={ref} className={`wrapper ${className}`} {...props}>
      {children}
    </div>
  );
});

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
