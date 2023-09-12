import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

import './Section.scss';

function Section({ title, showAll, to, children, className }) {
  return (
    <section className={`section ${className || ''}`}>
      <div className="d-flex justify-content-between section-header">
        <Link to={to} className="section__title">
          <h2>{title} </h2>
          <BsChevronRight />
        </Link>
        <div className="section__action">
          {showAll && (
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

export default memo(Section);
