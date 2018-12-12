# Prop Types

Run time type checking tool

### Installation

`
npm install --save prop-types
`

### Notes
-   It should be decleared in class component

### Implementation

```
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
    }
}

MyComponent.PropTypes = {
      optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
}
```