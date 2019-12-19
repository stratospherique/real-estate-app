import { combineReducers } from 'redux';
import currentUserReducer from './current-user';
import listReducer from './list-reducer';

const globalReducer = combineReducers({
  currentUser: currentUserReducer,
  aptList: listReducer,
});

export default globalReducer;
