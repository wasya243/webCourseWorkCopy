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

export const userActions = {
  logIn
};