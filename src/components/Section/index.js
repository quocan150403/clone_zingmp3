import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';

import './Section.scss';

function Section({ title, to, children, info }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between mb-4">
        {info ? (
          <div className="d-flex align-items-center">
            <div className="section__wrap me-3">
              <img src={info.image} alt="" />
            </div>
            <div className="d-flex flex-column section__info">
              <span>{info.name}</span>
              <h3 className="is-active">{info.singer}</h3>
            </div>
          </div>
        ) : (
          <div className="section__title">
            <h3>{title} </h3>
          </div>
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
    </div>
  );
}

export default Section;
