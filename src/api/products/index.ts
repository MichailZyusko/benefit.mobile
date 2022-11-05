import { Product } from '../../types/product';
import apiClient from '../apiClient';
import ProductDto from './product.dto';

export const getProducts = async () => {
  const { data } = await apiClient.get<Product[]>('/products');


  return data.map((item: Product) => new ProductDto(item));
};
