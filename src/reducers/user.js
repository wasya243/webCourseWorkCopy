import {USER_CONSTANTS, SHARED_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  isLoggedIn: false,
  userInfo: {
    firstName: null,
    lastName: null,
    email: null,
    address: null
  }
};

export default (state = initialState, action) => {
  const {type} = action;
  if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  } else if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, isLoggedIn, firstName, lastName, email, address} = action.payload;
    state = {...state, isPending, isLoggedIn, userInfo: {firstName, lastName, email, address}};

  } else if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  }

  return state;
};