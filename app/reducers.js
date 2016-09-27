import { combineReducers } from 'redux';
import DO_LOGIN from './actions';

const initialState = { selectedtemplate: 0, counter: 0 };

// login reeducer
const templateSelection = (state = initialState, action) => {
  switch (action.type) {
    case 'DO_LOGIN':
      console.log('DO_LOGIN ACTION');
      console.log(state);
      let newState = {};
      Object.assign(newState, { counter: state.counter + 1 });
      return newState;

    case 'SELECT_TEMPLATE':
      console.log('SELECT_TEMPLATE');
      console.log(state);
      console.log({ ...state, selectedtemplate: action.index });
      return { ...state, selectedtemplate: action.index };
    default:
      console.log('Default');
      return state;
  }
};

export default combineReducers({
  templateSelection,
});
