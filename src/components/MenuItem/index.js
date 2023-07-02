import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './MenuItem.scss';

function MenuItem({ option, to, icon, title, label, iconExpand, chevron }) {
  let Component = to ? NavLink : 'div';
  return (
    <Component to={to} className={`menu-item ${option ? 'option' : ''}`}>
      {icon && <div className="menu-item__icon">{icon}</div>}
      <div className="menu-item__title">
        {title}
        {label && <div className="menu-item__label">{label}</div>}
      </div>
      {iconExpand && <div className="menu-item__expand">{iconExpand}</div>}
      {chevron && <div className="menu-item__chevron">{chevron}</div>}
    </Component>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
};

export default MenuItem;
