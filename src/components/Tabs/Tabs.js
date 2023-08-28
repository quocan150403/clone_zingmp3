import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';
import { Link, NavLink } from 'react-router-dom';

function Tabs({
  list,
  tab,
  setTab,

  secondary,
  uppercase,
  fullWidth,
  large,
  isBorderBottom,
  ...props
}) {
  const classes = classNames('tabs', {
    secondary,
    large,
    uppercase,
    'is-full-width': fullWidth,
    'is-border-bottom': isBorderBottom,
  });

  return (
    <div className={classes} {...props}>
      {list.map((item) => (
        <NavLink key={item.id} to={item.path} className="tab__item">
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
