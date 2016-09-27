import { createStore, applyMiddleware, compose } from 'redux';

// import RootReducer from './RootReducer';
import reducers from './reducers';

export default function configureStore(initialState = undefined) {
  return createStore(reducers, initialState);
}
