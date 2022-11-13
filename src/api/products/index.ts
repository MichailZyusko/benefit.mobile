import { Product } from '../../types/product';
import apiClient from '../apiClient';
import ProductDto from './product.dto';

type GetProductsProps = {
  search: string;
};
export const getProducts = async ({ search = '' }: GetProductsProps) => {
  const { data } = await apiClient.get<Product[]>('/products', {
    params: {
      search,
    },
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
