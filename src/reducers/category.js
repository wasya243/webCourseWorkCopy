import {SHARED_CONSTANTS} from '../constants';
import {CATEGORY_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  items: [],
};

export default (state = initialState, action) => {
  const {type} = action;
  if (type === `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, listOfCategories} = action.payload;
    state = {...state, isPending, items: listOfCategories};

  } else if (type === `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  }

  return state;
};
