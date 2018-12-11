import {SHARED_CONSTANTS} from '../constants';
import {ORDER_CONSTANTS} from '../constants';
import {orderService} from "../_services/order.service";
import {alertActions} from "../actions";

const createOrder = (dispatch) => async (orderInfo) => {
  try {
    dispatch({
      type: `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });
    // TODO: maybe somehow save response to the state for later use
    await orderService.createOrder(orderInfo);
    dispatch({
      type: `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false}
    });
  } catch (error) {
    dispatch({
      type: `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
    // TODO: return back alert service
    // dispatch(alertActions.error(error.toString()));
  }
};

const getOrdersByUser = (dispatch) => async (userId) => {
  try {
    dispatch({
      type: `${ORDER_CONSTANTS.GET_ORDERS_BY_USER}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });
    const orders = await orderService.getOrdersByUser(userId);
    dispatch({
      type: `${ORDER_CONSTANTS.GET_ORDERS_BY_USER}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, orders}
    });
  } catch (error) {
    dispatch({
      type: `${ORDER_CONSTANTS.GET_ORDERS_BY_USER}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
    // TODO: return back alert service
    // dispatch(alertActions.error(error.toString()));
  }
};

export const orderActions = {
  createOrder,
  getOrdersByUser
};
