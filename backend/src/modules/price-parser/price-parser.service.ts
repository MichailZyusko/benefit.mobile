import { Injectable } from '@nestjs/common';
import ParserService from "./parsers";
import { ProductsService } from "../products/products.service";

@Injectable()
export class PriceParserService {
  constructor(private productsService: ProductsService) {}

  async updatePriceInfo(): Promise<void> {
    await ParserService.updatePriceInfo(this.productsService);
  }
}
