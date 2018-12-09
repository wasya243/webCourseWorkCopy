import {SHARED_CONSTANTS} from '../constants';
import {CART_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  items: [],
  totalSum: 0
};

export default (state = initialState, action) => {

  const {type} = action;

  if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, drugToAdd} = action.payload;

    state = {
      ...state,
      isPending,
      items: [...state.items.concat(drugToAdd)],
      totalSum: state.totalSum + drugToAdd.price
    }

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, drugToRemove} = action.payload;

    state = {
      ...state,
      isPending,
      items: state.items.filter(drug => drug.id !== drugToRemove.id),
      totalSum: state.totalSum - drugToRemove.price
    }

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  }

  return state;
};
