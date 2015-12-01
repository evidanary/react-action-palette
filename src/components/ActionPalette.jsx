'use strict';

import React from 'react';

/**
 * This component renders a list of buttons/text
 */
class ActionPalette extends React.Component {
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
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ActionPalette.propTypes = {
};

export default ActionPalette;
