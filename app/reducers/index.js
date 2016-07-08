import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import results from './results_reducers';

const rootReducer = combineReducers({
  results,
  counter,
  routing
});

export default rootReducer;
