import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAllProducts(): any {
    return this.productService.getProducts();
  }
}
