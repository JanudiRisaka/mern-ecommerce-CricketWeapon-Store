/*import axios from 'axios';
import {
  SUPPLIER_CREATE_REQUEST,
  SUPPLIER_CREATE_SUCCESS,
  SUPPLIER_CREATE_FAIL,
  CLEAR_ERRORS,
} from '../constants/supplierConstants';

// Action for creating a supplier
export const createSupplier = (supplierData) => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_CREATE_REQUEST });

    // Make API call here
    const { data } = await axios.post('/api/suppliers', supplierData);

    dispatch({
      type: SUPPLIER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPPLIER_CREATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors action
export const clearSupplierErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
*/