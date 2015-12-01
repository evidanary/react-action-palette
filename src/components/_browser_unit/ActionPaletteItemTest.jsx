'use strict';

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
import ActionPaletteItem from '../ActionPaletteItem.jsx';

describe('ActionPaletteItem', function() {
  describe('#doNothing', function() {

    it('should pass', function() {
      var actionPaletteItemInstance = TestUtils.renderIntoDocument(
        <ActionPaletteItem />
      );
      actionPaletteItemInstance.doNothing();
      expect(actionPaletteItemInstance.state.something).to.be.true;
    });
  });
});
