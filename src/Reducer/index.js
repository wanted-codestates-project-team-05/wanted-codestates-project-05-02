import { combineReducers } from 'redux';
import matchList from './matchList';
import matchDetail from './matchDetail';

const rootReducer = combineReducers({
  matchList,
  matchDetail,
});

export default rootReducer;
