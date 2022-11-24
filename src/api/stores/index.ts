import { Store } from '../../types/store';
import apiClient from '../apiClient';

export const getStores = async () => {
  const { data } = await apiClient.get<Store[]>('/stores');

  return data;
};
