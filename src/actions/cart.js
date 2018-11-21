import {SHARED_CONSTANTS} from '../constants';
import {CART_CONSTANTS} from '../constants';

export const addToCart = (dispatch) => async (drugToAdd) => {
  console.log(drugToAdd);
  try {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: sent item to the backend

    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, drugToAdd}
    });
  } catch (error) {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

export const cartActions = {
  addToCart
};