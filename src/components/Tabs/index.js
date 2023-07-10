import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';
function Tabs({ tabs, isBorderBottom }) {
  return (
    <div className={`tabs ${isBorderBottom ? 'is-border-bottom' : ''}`}>
      {tabs.map((tab) => (
        <div key={tab.id} className="tabs__item">
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
