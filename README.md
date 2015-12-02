react-action-palette
===
A react component that allows you to render a list of font awesome icons and specify associated actions for each icon click. This component is useful for showing buttons for CRUD/utility operations on resources.

#Examples of what you can do
- Use react-action-palette to show palette of actions/commands on hover over a resource such as blog entries, lists, etc.

#How to use

```javascript
import React from 'react';
import {ActionPalette, ActionPaletteItem} from 'react-action-pallette';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteSomething() {
    console.log("deleted");
  }

  editSomething() {
    console.log("edited");
  }

  render() {
    return(
      <ActionPalette>
        <ActionPaletteItem
          visible: () => {true},
          className: "fa fa-edit",
          onClick: this.editSomething/>
        <ActionPaletteItem
          visible: () => {false},
          className: "fa fa-trash",
          onClick: this.deleteSomething/>
      </ActionPalette>
    );
  }
}

```

#Develop
To run tests
```javascript
git clone https://github.com/evidanary/react-action-palette.git
cd react-action-palette
npm install
npm test
```

