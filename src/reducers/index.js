import {combineReducers} from 'redux';

import drugs from './drugs';
import cart from './cart';
import user from './user';
import alert from './alert'

export default combineReducers({
  drugs,
  cart,
  user,
  alert
});
