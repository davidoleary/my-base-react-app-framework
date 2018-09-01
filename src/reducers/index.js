import { combineReducers } from 'redux';

function placeholderReducer(state = [], action) {
  const example = 'EXAMPLE';
  if (action.type === example) {
    return [...state, new Date().toISOString()];
  }
  return state;
}

const uploadApp = combineReducers({
  placeholder: placeholderReducer,
});

export default uploadApp;
