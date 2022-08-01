import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { GetProductsDto } from "./dto/get-products.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProducts(getProductsDto: GetProductsDto): Promise<Product[]> {
    return this.productRepository.find({
      take: getProductsDto.limit || 10,
      skip: getProductsDto.skip || 0,
    });
  }

  async getProductByBarcode(barcode: string): Promise<Product | null> {
    return this.productRepository.findOneBy({ barcode });
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.save(createProductDto);
  }

  async updateProduct(updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productRepository.save(updateProductDto);
  }

  async deleteProductByBarcode(barcode: string): Promise<void> {
    const productToRemove = await this.productRepository.findOneBy({ barcode });

    if (!productToRemove) {
      throw new Error(`Product with barcode ${barcode} not found`);
    }

    await this.productRepository.remove(productToRemove);
  }
}
