import { Product } from '../../types/product';
import apiClient from '../apiClient';
import ProductDto from './product.dto';
import qs from 'qs';

type GetProductsProps = {
  search: string;
  storeIds: string[];
};
export const getProducts = async ({
  search = '',
  storeIds = [],
}: GetProductsProps) => {
  const {
    data: { data },
  } = await apiClient.get<{ data: Product[] }>('/products', {
    params: {
      search,
      take: 250,
      storeIds,
    },
    paramsSerializer: (params) => qs.stringify(params),
  });

  return data.map((item: Product) => new ProductDto(item));
};

type GetProductByBarcodeProps = {
  barcode: string;
};
export const getProductByBarcode = async ({
  barcode = '',
}: GetProductByBarcodeProps) => {
  const { data } = await apiClient.get<Product>(`/products/${barcode}`);

  return new ProductDto(data);
};
