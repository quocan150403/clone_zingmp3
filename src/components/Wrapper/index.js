import './Wrapper.scss';

function Wrapper({ children, className = 'pt-3 pb-3' }) {
  return <div className={`wrapper ${className}`}>{children}</div>;
}

Wrapper.propTypes = {};

export default Wrapper;
