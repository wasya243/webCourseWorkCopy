import {SHARED_CONSTANTS} from '../constants';
import {DRUGS_CONSTANTS} from '../constants';

const initialState = {
  isPending: true,
  items: [],
};

export default (state = initialState, action) => {
  const {type} = action;
  if (type === `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, listOfDrugs} = action.payload;
    state = {...state, isPending, items: listOfDrugs};

  } else if (type === `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  }

  return state;
};
