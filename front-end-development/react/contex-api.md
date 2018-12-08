## About Context API
When you want to take data from your deep child components, taking them could be hard it was like prop drilling.

For solving this you may use one data holder component featured as importable form object that would use data. But what about update that would also cause problems. You have to implement event emitter to notify subscribers.

So this why we need to use state management libraries like redux.
Allow you to get data from the store easily anywhere in the tree.

Redux provides you <Provider /> component and behind the logic of it there were context.

Context api used on 
    react-redux, MobX-react, react-router, glamorous

------------------------------

What is Context API?
- Helps to accessing data of components from different components pass data globally on your application.
- Like setting global theme in your application
- Or making authentication

Example:
  In App.js s after the import statements
  export  const AuthContext = React.createContext(false);

<AuthContext.Provider value={this.state.authenticated}>
  {persons}
</AuthContext.Provider>

<AuthContext.Consumer>
  {auth => auth ? <p>I'm authenticated!</p> : null}

</AuthContext.Consumer>


------------------------------

## New Context API (16.16) (Another Approach to create context)
Accessing child component state easier

### Exporting Context

```
export const AuthContext = React.createContext({
  isAuth: false,
  toogleAuth: () => {}
});
```

### Under Another Component

```
import { AuthContext } from '../App';

static contextType = AuthContext;
```

this.context would give tou context that you exported.