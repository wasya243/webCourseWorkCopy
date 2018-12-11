import {USER_CONSTANTS, SHARED_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  isLoggedIn: false,
  userInfo: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    address: null,
    phoneNumber: null
  }
};

export default (state = initialState, action) => {
  const {type} = action;
  if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  } else if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, isLoggedIn, firstName, lastName, email, address, id} = action.payload;
    state = {...state, isPending, isLoggedIn, userInfo: {firstName, lastName, email, address, id}};

  } else if (type === `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  } else if (type === `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  } else if (type === `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {
      ...state, isPending, isLoggedIn,
      userInfo: {
        firstName: null,
        lastName: null,
        email: null,
        address: null
      }
    };

  } else if (type === `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending, isLoggedIn} = action.payload;
    state = {...state, isPending, isLoggedIn};

  } else if (type === `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;

    state = {
      ...state,
      isPending
    };

  } else if (type === `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.SUCCESS}`) {

    // TODO: clarify whether or not we should set user info into state after registration
    const {isPending, firstName, lastName, address, email} = action.payload;

    state = {
      ...state,
      isPending,
      // firstName,
      // lastName,
      // address,
      // email
    };

  } else if (type === `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;

    state = {
      ...state,
      isPending
    };
  }

  return state;
};
