import axios from 'axios';
import {
  API_FAILURE,
  API_LIST_END,
  API_REQUEST,
  API_SUCCESS,
} from '../../screens/home/slicer';

const URL = 'https://benefit-app.herokuapp.com/api/v1/products';
const itemsPerPage = 50;

export const getProducts = async (dispatch: Function, page: number) => {
  try {
    dispatch(API_REQUEST());
    const {data, status} = await axios.get(URL, {
      params: {
        limit: itemsPerPage,
        skip: page * itemsPerPage,
      },
    });

    if (status !== 200) {
      throw new Error('Something went wrong');
    }

    if (data.length < itemsPerPage) {
      dispatch(API_LIST_END());
    }

    dispatch(API_SUCCESS(data));
  } catch (error) {
    dispatch(API_FAILURE(error));
  }
};
