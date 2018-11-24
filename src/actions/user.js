import {SHARED_CONSTANTS} from '../constants';
import {USER_CONSTANTS} from '../constants';

const logIn = (dispatch) => async ({email, password}) => {
  try {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true, isLoggedIn: false}
    });

    // TODO make call to the backend
    const {firstName, lastName, address} = await simulateLogin(email, password);

    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false, isLoggedIn: true, firstName, lastName, email, address}
    });

  } catch (error) {
    dispatch({
      type: `${USER_CONSTANTS.SIGN_IN}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false, isLoggedIn: false}
    })
  }
};

const logOut = (dispatch) => async ({email}) => {
  try {
    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true, isLoggedIn: true}
    });

    // TODO make call to the backend

    await simulateLogout(email);

    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, isLoggedIn: false}
    });

  } catch (error) {
    dispatch({
      type: `${USER_CONSTANTS.LOG_OUT}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false, isLoggedIn: true}
    });
  }
};

function simulateLogin(email, password) {
  return new Promise((resolve, reject) => {
    resolve({
      firstName: 'Vasyl',
      lastName: 'Kharchenko',
      email: 'wasya243@gmai.com',
      address: 'Smilyanska steet'
    });
  });
}

function simulateLogout(email) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

export const userActions = {
  logIn,
  logOut
};