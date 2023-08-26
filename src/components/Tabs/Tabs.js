import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

const indexActive = 0;
function Tabs({ tabs, secondary, uppercase, fullWidth, large, isBorderBottom, ...props }) {
  const classes = classNames('tabs', {
    secondary,
    large,
    uppercase,
    'is-full-width': fullWidth,
    'is-border-bottom': isBorderBottom,
  });

  return (
    <div className={classes} {...props}>
      {tabs.map((tab, index) => (
        <div key={tab.id} className={classNames('tab__item', { active: index === indexActive })}>
          {tab.name}
        </div>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
