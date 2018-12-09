import {SHARED_CONSTANTS} from '../constants';
import {DRUGS_CONSTANTS} from '../constants';
import {drugService} from "../_services/drug.service";

const fetchDrugs = (dispatch) => async () => {
  try {
    dispatch({
      type: `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });
    const listOfDrugs = await drugService.getAll();
    dispatch({
      type: `${DRUGS_CONSTANTS.GET_DRUGS}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, listOfDrugs}
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
