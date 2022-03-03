import { combineReducers } from 'redux';
import getMatchList from './getMatchList';

const rootReducer = combineReducers({
  matchList: getMatchList,
});

export default rootReducer;
