import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './MenuItem.scss';

function MenuItem({ option, responsive, small, to, icon, title, label, iconExpand, chevron, ...props }) {
  let Component = to ? NavLink : 'div';
  const classes = classNames('menu-item', {
    option,
    small,
    responsive,
  });
  return (
    <Component to={to} className={classes} {...props}>
      {icon && <div className="menu-item__icon">{icon}</div>}
      <div className="menu-item__title">
        {title}
        {label && <div className="menu-item__label d-none-mobile">{label}</div>}
      </div>
      {iconExpand && <div className="menu-item__expand">{iconExpand}</div>}
      {chevron && <div className="menu-item__chevron">{chevron}</div>}
    </Component>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  label: PropTypes.string,
  iconExpand: PropTypes.element,
  chevron: PropTypes.element,
};

export default MenuItem;
