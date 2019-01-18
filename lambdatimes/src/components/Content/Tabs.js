import React from 'react';
import PropTypes from 'prop-types'

import Tab from './Tab';

const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
             { props.tabs.map(tab => 
                <Tab 
                  selectTabHandler={props.selectTabHandler} 
                  selectedTab={props.selectedTab} 
                  tab={tab}
                  key={tab} 
                /> 
        )}
      </div>
    </div>
  );
};
// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string,
    tab: PropTypes.string
}


export default Tabs;
