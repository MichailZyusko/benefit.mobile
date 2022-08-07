import axios from 'axios';
import {
  API_FAILURE,
  API_LIST_END,
  API_REQUEST,
  API_SUCCESS,
} from '../../screens/home/slicer';

const URL = 'https://api.infoprice.by/InfoPrice.Goods';
const itemsPerPage = 44;

export const getProducts = async (
  dispatch: Function,
  page: number,
  search = '',
) => {
  try {
    dispatch(API_REQUEST());
    const {data, status} = await axios.post(URL, {
      Packet: {
        Data: {
          Page: (page + 1).toString(),
          Search: search,
          CompareСontractorId: 72631,
          CatalogType: 1,
        },
      },
    });

    if (status !== 200) {
      throw new Error('Something went wrong');
    }

    const products = data.Table[0].GoodsOffer;

    if (products.length < itemsPerPage) {
      dispatch(API_LIST_END());
    }

    dispatch(API_SUCCESS(products));
  } catch (error) {
    dispatch(API_FAILURE([]));
  }
};
