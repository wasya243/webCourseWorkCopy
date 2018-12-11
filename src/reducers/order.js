import {SHARED_CONSTANTS} from '../constants';
import {ORDER_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  items: [],
};

export default (state = initialState, action) => {
  const {type} = action;
  if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, orders} = action.payload;
    state = {...state, isPending, items: orders};

  } else if (type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  }

  return state;
};
