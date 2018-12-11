import {SHARED_CONSTANTS} from '../constants';
import {CART_CONSTANTS, ORDER_CONSTANTS} from '../constants';

const initialState = {
  isPending: false,
  items: [],
  totalSum: 0
};

export default (state = initialState, action) => {

  const {type} = action;

  if(type === `${ORDER_CONSTANTS.CREATE_ORDER}/${SHARED_CONSTANTS.SUCCESS}`) {
    state = {...state, totalSum: 0, items: []}
  }

  if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, drugToAdd} = action.payload;
    const {items} = state;
    // TODO: make refactoring
    const [ checkIfExists ] = items.filter(item => drugToAdd._id === item.drug._id);

    if (checkIfExists) {
      // if drug exists we should increase its amount
      state = {
        ...state,
        isPending,
        items: [ ...state.items.map(item => item.drug._id === drugToAdd._id ? {
          amountOfDrugs: checkIfExists.amountOfDrugs + 1,
          drug: drugToAdd
        } : item) ],
        totalSum: state.totalSum + drugToAdd.price
      }
    } else {
      // otherwise just add the drug without increasing its amount (set to 1)
      state = {
        ...state,
        isPending,
        items: [ ...state.items.concat({amountOfDrugs: 1, drug: drugToAdd}) ],
        totalSum: state.totalSum + drugToAdd.price
      }
    }

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, drugToRemove} = action.payload;

    const [ drugToBeRemoved ] = state.items.filter(item => item.drug._id === drugToRemove._id);
    state = {
      ...state,
      isPending,
      items: state.items.filter(item => item.drug._id !== drugToRemove._id),
      totalSum: state.totalSum - (drugToRemove.price * drugToBeRemoved.amountOfDrugs)
    }

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.SUCCESS}`) {

    const {isPending, drugToAdd} = action.payload;
    const [ drugToBeUpdated ] = state.items.filter(item => item.drug._id === drugToAdd._id);

    state = {
      ...state,
      isPending,
      items: [ ...state.items.map(item => item.drug._id === drugToAdd._id
        ? Object.assign(item, {amountOfDrugs: drugToBeUpdated.amountOfDrugs + 1})
        : item)
      ],
      totalSum: state.totalSum + drugToAdd.price
    }

  } else if (type === `${CART_CONSTANTS.ADD_TO_CART_BY_INCREMENT}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.REQUEST}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.SUCCESS}`) {

    // TODO: make refactoring
    const {isPending, drugToRemove} = action.payload;
    const [ drugToBeUpdated ] = state.items.filter(item => item.drug._id === drugToRemove._id);

    if (drugToBeUpdated.amountOfDrugs === 1) {
      // if it is the last drug we should remove it from items array
      state = {
        ...state,
        isPending,
        items: [ ...state.items.filter(item => item.drug._id !== drugToRemove._id) ],
        totalSum: state.totalSum - drugToRemove.price
      }
    } else {
      // otherwise decrement its amount
      state = {
        ...state,
        isPending,
        items: [ ...state.items.map(item => item.drug._id === drugToRemove._id
          ? Object.assign(item, {amountOfDrugs: drugToBeUpdated.amountOfDrugs - 1})
          : item)
        ],
        totalSum: state.totalSum - drugToRemove.price
      }
    }

  } else if (type === `${CART_CONSTANTS.REMOVE_FROM_CART_BY_DECREMENT}/${SHARED_CONSTANTS.FAILURE}`) {

    const {isPending} = action.payload;
    state = {...state, isPending};

  }

  return state;
};
