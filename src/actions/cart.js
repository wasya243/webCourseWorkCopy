import {SHARED_CONSTANTS} from '../constants';
import {CART_CONSTANTS} from '../constants';

const addToCart = (dispatch) => async (drugToAdd) => {
  try {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: send item to the backend

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

const removeFromCart = (dispatch) => async (drugToRemove) => {
  try {
    dispatch({
      type: `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: send request to the backend

    dispatch({
      type: `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, drugToRemove}
    });
  } catch (error) {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

export const cartActions = {
  addToCart,
  removeFromCart
};