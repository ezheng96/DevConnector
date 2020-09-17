//have multiple reducers, this is the root reducer
import { combineReducers } from 'redux';
import alert from './alert';

//takes in object that has any reducers we create
export default combineReducers({
  alert,
});
