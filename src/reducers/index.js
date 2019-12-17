import { combineReducers } from 'redux';
import currentUserReducer from './current-user';

const globalReducer = combineReducers({
  currentUser: currentUserReducer,
});

export default globalReducer;
