'use strict';

// TODO Need to investigate if this can work with module "imports"
//import {React} from 'react';
//import {ReactAddons} from 'react/addons';
//import {TestUtils} from 'react-addons-test-utils';
//import ActionPalette from '../ActionPalette.jsx';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
import ActionPalette from '../ActionPalette.jsx';

describe('ActionPalette', function() {
  describe('#doNothing', function() {

    it('should pass', function() {
      var actionPaletteInstance = TestUtils.renderIntoDocument(
        <ActionPalette />
      );
      actionPaletteInstance.doNothing();
      expect(actionPaletteInstance.state.something).to.be.true;
    });
  });
});
