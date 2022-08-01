import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Query
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./entity/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { GetProductsDto } from "./dto/get-products.dto";

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllProducts(@Query() getProductsDto :GetProductsDto): Promise<Product[]> {
    return await this.productService.getProducts(getProductsDto);
  }

  @Get(':barcode')
  @HttpCode(HttpStatus.OK)
  async findProductByBarcode(@Param('barcode') barcode: string): Promise<Product | null> {
    return await this.productService.getProductByBarcode(barcode);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.createProduct(createProductDto);
  }

  @Put(':barcode')
  @HttpCode(HttpStatus.OK)
  async updateProduct(@Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return await this.productService.updateProduct(updateProductDto);
  }

  @Delete(':barcode')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProductByBarcode(@Param('barcode') barcode: string): Promise<void> {
    return await this.productService.deleteProductByBarcode(barcode);
  }
}
