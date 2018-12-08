# React.memo Higher Order Function (Functional Component)

Used for optimization 
It is the equivalence of React.PureComponent just used on functional component

If you want to make rendering optimizations like allowing rendering component when either its props and states change you may use React.memo high order function when you were working on functional components if it was a class component you have to use React.PureComponent to allow same feature

## Example:
---
```
import React from 'react';

const memoFunctionalComponent = () => {
    return <div>Hello I'm Memo Functional Component</div>;
}

export default React.memo(memoFinctionalComponent);

```