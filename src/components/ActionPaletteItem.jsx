'use strict';

import React from 'react';

/**
 * This component renders an ActionPaletteItem
 */
class ActionPaletteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  doNothing() {
    this.setState({something: true});
  }

  render() {
    if(this.state.visible === true) {
      return (
        <div>
        </div>
      );
    }
  }
}

ActionPaletteItem.propTypes = {
  name: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  visible: React.PropTypes.func
};

export default ActionPaletteItem;
