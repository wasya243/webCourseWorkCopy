import {SHARED_CONSTANTS} from '../constants';
import {CATEGORY_CONSTANTS} from '../constants';
import {categoryService} from "../_services/category.service";

const fetchCategories = (dispatch) => async () => {
  try {
    dispatch({
      type: `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.REQUEST}`,
      payload: {isPending: true}
    });
    const listOfCategories = await categoryService.getAll();
    dispatch({
      type: `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.SUCCESS}`,
      payload: {isPending: false, listOfCategories}
    });
  } catch (error) {
    dispatch({
      type: `${CATEGORY_CONSTANTS.GET_CATEGORIES}/${SHARED_CONSTANTS.FAILURE}`,
      payload: {isPending: false}
    });
  }
};

export const categoryActions = {
  fetchCategories
};
