// @flow weak
import * as actionTypes from './actionsTypes';

const DEFAULT_STATE = { onLogging: false };

// Reducers
export default function(state = DEFAULT_STATE, action) {
  console.log('------', action.type, actionTypes.SELECT_TEMPLATE);
  switch (action.type) {
    case actionTypes.SELECT_TEMPLATE:
      let x = { ...state, onLogging: true };
      console.log('---1------', x);
      return x;
    default:
      return state;
  }
}

// Selector (mapStateToProps)
export const getLogin = (state) => {
  console.log('GetLogin', JSON.stringify(state));
  return ({
    onLogging: state.onLogging,
  });
};
