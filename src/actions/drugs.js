import axios from 'axios';

import {SHARED_CONSTANTS} from '../constants';
import {DRUGS_CONSTANTS} from '../constants';

export const fetchDrugs = (dispatch) => async () => {
  try {
    dispatch({
      type: `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });
    const {data} = await axios('/drugs.json');
    dispatch({
      type: `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, listOfDrugs: data}
    });
  } catch (error) {
    dispatch({
      type: `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

export const drugsActions = {
  fetchDrugs
};