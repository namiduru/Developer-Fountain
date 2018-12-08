# Pure Component (Class Components Feature)

That means that this component should be rendered when its one of the props or state has changed not rendered when child components are change!

This has build in shouldComponentUpdate method that makes shallow compression of prev and current states and props and decide to continue life cycle for rendering operations.

- For example there is a implementation example of should component update. That means when prev and the current probs not the same keep rendering lifecycle otherwise stop.

```
shouldComponentUpdate(prevProps, prevState){
    return prevProps.name != this.props.name;
}
```

This is the feature to make optimization on React appications.

---

## Implementation

```
import react from 'react';

class PureComponent extends React.PureComponent{

}
```
