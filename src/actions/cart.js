import {SHARED_CONSTANTS} from '../constants';
import {CART_CONSTANTS} from '../constants';

const addToCartByIncrement = (dispatch) => async (drugToAdd) => {
  try {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: send item to the backend if needed (now I use redux-persist)

    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, drugToAdd}
    });
  } catch (error) {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

const removeFromCartByDecrement = (dispatch) => async (drugToRemove) => {
  try {
    dispatch({
      type: `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: send item to the backend if needed (now I use redux-persist)
    dispatch({
      type: `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, drugToRemove}
    });
  } catch (error) {
    dispatch({
      type: `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

const addToCart = (dispatch) => async (drugToAdd) => {
  try {
    dispatch({
      type: `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });

    // TODO: send item to the backend if needed

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

    // TODO: send item to the backend if needed

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
  removeFromCart,
  addToCartByIncrement,
  removeFromCartByDecrement
};
