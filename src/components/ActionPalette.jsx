'use strict';

import React from 'react';

/**
 * This component renders a list of buttons/text
 * TODO: Need to accept props which allow for easier styling
 */
class ActionPalette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ActionPalette;
