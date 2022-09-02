import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductByBarcode } from './dto/get-product-by-barcode.dto';
import { GetProductsDto } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @MessagePattern('products.find')
  async find(@Payload() getProductsDto: GetProductsDto) {
    try {
      const products = await this.productService.find(getProductsDto);

      return products;
    } catch ({ message, code }: any) {
      console.log({ message, code });

      return { message, code };
    }
  }

  @MessagePattern('products.findByBarcode')
  async findByBarcode(@Payload() getProductByBarcode: GetProductByBarcode) {
    try {
      const product = await this.productService.findByBarcode(
        getProductByBarcode,
      );

      return { ...product };
    } catch ({ message, code }: any) {
      console.log({ message, code });

      return { message, code };
    }
  }

  @MessagePattern('products.findByBarcodeAndUpdate')
  async findByBarcodeAndUpdate(@Payload() updateProductDto: UpdateProductDto) {
    try {
      const updatedProduct = await this.productService.findByBarcodeAndUpdate(
        updateProductDto,
      );

      return updatedProduct;
    } catch ({ message, code }: any) {
      console.log({ message, code });

      return { message, code };
    }
  }

  @MessagePattern('products.findByBarcodeAndDelete')
  async findByBarcodeAndDelete(
    @Payload() getProductByBarcode: GetProductByBarcode,
  ) {
    try {
      await this.productService.findByBarcodeAndDelete(getProductByBarcode);

      return {
        status: 200,
        message: `Product with barcode: ${getProductByBarcode.barcode} succsesfully deleted`,
      };
    } catch ({ message, code }: any) {
      console.log({ message, code });

      return { message, code };
    }
  }

  @MessagePattern('products.save')
  async save(@Payload() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.save(createProductDto);

      return product;
    } catch ({ message, code }: any) {
      console.log({ message, code });

      return { message, code };
    }
  }
}
