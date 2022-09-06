import axios from 'axios';
import {
  API_FAILURE,
  API_LIST_END,
  API_REQUEST,
  API_SUCCESS,
} from '../../screens/home/slicer';
import ProductDto from '../../components/ProductCard/dto';

const URL = 'https://api.infoprice.by/InfoPrice.Goods';
const itemsPerPage = 44;

export const getProducts = async (
  dispatch: Function,
  page: number,
  search = '',
  storeIds = [],
  categoryId = '',
) => {
  try {
    dispatch(API_REQUEST());
    const {data, status} = await axios.post(URL, {
      Packet: {
        Data: {
          Page: (page + 1).toString(),
          Search: search,
          ContractorId: storeIds.join(','),
          CompareСontractorId: 72631,
          CatalogType: 1,
          GoodsGroupId: categoryId,
        },
      },
    });

    if (status !== 200) {
      throw new Error('Something went wrong');
    }

    const products = data.Table[0].GoodsOffer.map(
      (item: any) => new ProductDto(item),
    );

    if (products.length < itemsPerPage) {
      dispatch(API_LIST_END());
    }

    dispatch(API_SUCCESS(products));
  } catch (error) {
    dispatch(API_FAILURE([]));
  }
};

export const getProsuctsByBarcode = async (barcode: string) => {
  console.log(barcode);

  const {data} = await axios.post(URL, {
    Packet: {
      Data: {
        Page: 1,
        Search: barcode,
        CompareСontractorId: 72631,
        CatalogType: 1,
      },
    },
  });

  const [product] = data.Table[0].GoodsOffer.map(
    (item: any) => new ProductDto(item),
  );

  return product;
};
