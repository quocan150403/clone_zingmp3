import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

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
        <div
          key={item.id}
          className={classNames('tab__item', { active: item.id === tab.id })}
          onClick={() => setTab(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
