import {combineReducers} from 'redux';

import drugs from './drugs';
import cart from './cart';

export default combineReducers({
  drugs,
  cart
});