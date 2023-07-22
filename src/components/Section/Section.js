import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

import './Section.scss';

function Section({ title, to, children, info, className }) {
  return (
    <section className={`section ${className || ''}`}>
      <div className="d-flex justify-content-between section-header">
        {info ? (
          <div className="d-flex align-items-center">
            <div className="section__wrap me-3">
              <img src={info.image} alt="" />
            </div>
            <div className="d-flex flex-column section__info">
              <h2>{info.name}</h2>
              <h3 className="is-active">{info.singer}</h3>
            </div>
          </div>
        ) : (
          <Link to={to} className="section__title">
            <h2>{title} </h2>
            <BsChevronRight />
          </Link>
        )}
        <div className="section__action">
          {!!to && (
            <Link to={to}>
              <span>Tất Cả</span>
              <BsChevronRight />
            </Link>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  info: PropTypes.object,
  className: PropTypes.string,
};

export default Section;
