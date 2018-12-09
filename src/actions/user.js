import {SHARED_CONSTANTS} from '../constants';
import {USER_CONSTANTS} from '../constants';

import {userService} from "../_services";
import {history} from '../_helpers';
import {alertActions} from "./alert";

const logIn = (dispatch) => async (email, password) => {
  try {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true, isLoggedIn: false}
    });

    const {userInfo} = await userService.login(email, password);
    const {firstName, lastName, address, phoneNumber} = userInfo;

    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, isLoggedIn: true, firstName, lastName, email, address, phoneNumber}
    });
    // navigate to the main page
    history.push('/');
  } catch (error) {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false, isLoggedIn: false}
    });
    dispatch(alertActions.error(error.toString()));
  }
};

const logOut = (dispatch) => async () => {
  try {
    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true, isLoggedIn: true}
    });

    await userService.logout();

    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, isLoggedIn: false}
    });
    // navigate to the login page
    history.push('/log-in');
  } catch (error) {
    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false, isLoggedIn: true}
    });
    dispatch(alertActions.error(error.toString()));
  }
};

const signUp = (dispatch) => async (user) => {
  try {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    const {firstName, lastName, email, address, phoneNumber} = await userService.register(user);

    dispatch({
      type: `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, firstName, lastName, email, address, phoneNumber}
    });
    // navigate to the login page
    history.push('/log-in');
  } catch (error) {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_UP}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
    dispatch(alertActions.error(error.toString()));
  }
};

export const userActions = {
  logIn,
  logOut,
  signUp
};
