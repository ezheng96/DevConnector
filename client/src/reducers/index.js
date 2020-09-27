//have multiple reducers, this is the root reducer
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

//takes in object that has any reducers we create
export default combineReducers({
  alert,
  auth,
});
