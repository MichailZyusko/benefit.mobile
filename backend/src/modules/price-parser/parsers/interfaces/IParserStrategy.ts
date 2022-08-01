import { ProductsService } from "../../../products/products.service";

export interface IParserStrategy {
  parse(productsService: ProductsService): Promise<void>;
}
