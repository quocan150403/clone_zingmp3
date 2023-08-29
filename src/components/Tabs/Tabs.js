import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';
import { NavLink } from 'react-router-dom';
function Tabs({ list, tab, setTab, secondary, uppercase, fullWidth, large, isBorderBottom }) {
  const classes = classNames('tabs', {
    secondary,
    large,
    uppercase,
    'is-full-width': fullWidth,
    'is-border-bottom': isBorderBottom,
  });

  return (
    <div className={classes}>
      {list.map((item) => {
        if (item.to) {
          return (
            <NavLink key={item.id} to={item.to} className="tab__item">
              {item.name}
            </NavLink>
          );
        } else {
          const handleClick = () => setTab(item);
          return (
            <div
              key={item.id}
              className={classNames('tab__item', {
                active: tab.id === item.id,
              })}
              onClick={handleClick}
            >
              {item.name}
            </div>
          );
        }
      })}
    </div>
  );
}

Tabs.propTypes = {
  list: PropTypes.array,
  tab: PropTypes.object,
  setTab: PropTypes.func,
  secondary: PropTypes.bool,
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
  large: PropTypes.bool,
  isBorderBottom: PropTypes.bool,
};

export default Tabs;
