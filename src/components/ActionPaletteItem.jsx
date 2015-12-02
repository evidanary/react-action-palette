'use strict';

import React from 'react';

/**
 * This component renders an ActionPaletteItem
 */
class ActionPaletteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    if(this.props.visible === true) {
      return (
        <span onClick={this.props.onClick}>
          <i className={this.props.className} />
        </span>
      );
    } else {
      return false;
    }
  }
}

ActionPaletteItem.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  visible: React.PropTypes.bool
};

ActionPaletteItem.defaultProps = {
  visible: true
};

export default ActionPaletteItem;
