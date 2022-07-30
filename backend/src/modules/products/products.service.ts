import { Injectable } from '@nestjs/common';
import axios from "axios";

const API_URL = 'https://green-dostavka.by/api/v1/products?storeId=2&limit=100&skip=0';

@Injectable()
export class ProductsService {
  async getProducts(): Promise<any> {
    const { data } = await axios.get(API_URL);

    return data;
  }
}
