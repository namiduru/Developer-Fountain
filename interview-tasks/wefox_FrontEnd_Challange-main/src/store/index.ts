import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
