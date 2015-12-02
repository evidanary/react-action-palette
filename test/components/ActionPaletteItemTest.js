var React = require('react/addons'),
    assert = require('assert'),
    ActionPaletteItem = require('../../src/components/ActionPaletteItem.jsx'),
    TestUtils = React.addons.TestUtils;

describe('ActionPaletteItem component', function(){
  it('<span> should be rendered when visible', function() {
    let renderedComponent = TestUtils.renderIntoDocument(
      <ActionPaletteItem />
    );

    // Searching for <span> tag within rendered React component
    // Throws an exception if not found
    let inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'span'
    );

    let inputElement = inputComponent.getDOMNode();
    assert(inputElement !== null);
  });

  it('<span> should not be rendered when visible is false', function() {
    let renderedComponent = TestUtils.renderIntoDocument(
      <div>
      <ActionPaletteItem visible={false}/>
      </div>
    );

    let v = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent, 'span');
    assert(v.length === 0);
  });

  it('onClick handler should work when clicked', function() {
    let clicked = false;
    let clickMe = () => {clicked = true;}
    let renderedComponent = TestUtils.renderIntoDocument(
      <ActionPaletteItem onClick={clickMe}/>
    );

    let v = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'span');
    TestUtils.Simulate.click(v);
    assert(clicked === true);
  });

  it('should set the class of i tag when className is passed', function() {
    let renderedComponent = TestUtils.renderIntoDocument(
      <ActionPaletteItem className="fa"/>
    );

    let v = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'i');
    assert(v.getDOMNode().getAttribute("class") === "fa");
  });
});

