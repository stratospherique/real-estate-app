import { combineReducers } from 'redux';
import currentUserReducer from './current-user';
import listReducer from './list-reducer';
import favoritesReducer from './favorites-reducer';
import trendingReducer from './trending-reducer';
import viewportReducer from './viewport-reducer';

const globalReducer = combineReducers({
  currentUser: currentUserReducer,
  aptList: listReducer,
  likedItems: favoritesReducer,
  trendingItems: trendingReducer,
  viewport: viewportReducer,
});

export default globalReducer;
