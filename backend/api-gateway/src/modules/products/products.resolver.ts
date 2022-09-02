import { Inject, OnModuleInit } from '@nestjs/common';
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { ClientKafka } from '@nestjs/microservices';
import { timeout } from 'rxjs';
import { CreateProductArgs, CreateProductDto } from './dto/create-product.dto';
import {
  GetProductByBarcode,
  GetProductByBarcodeArgs,
} from './dto/get-product-by-barcode.dto';
import { GetProductsArgs, GetProductsDto } from './dto/get-products.dto';
import { UpdateProductArgs, UpdateProductDto } from './dto/update-product.dto';
import { DeleteResponse } from './models/delete-response.model';
import { Product } from './models/products.model';

const TIMEOUT_TIME = 5e3;

@Resolver(() => Product)
export class ProductsResolver implements OnModuleInit {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientKafka) {}

  private topics = [
    'products.find',
    'products.findByBarcode',
    'products.findByBarcodeAndUpdate',
    'products.findByBarcodeAndDelete',
    'products.save',
  ];

  async onModuleInit() {
    this.topics.forEach((topic) => {
      this.client.subscribeToResponseOf(topic);
    });

    await this.client.connect();
  }

  @Query(() => [Product])
  getProducts(@Args() args: GetProductsArgs) {
    const products = this.client
      .send<Product[], GetProductsDto>('products.find', {
        take: args.take,
        skip: args.skip,
      })
      .pipe(timeout(TIMEOUT_TIME));

    return products;
  }

  @Query(() => Product)
  getProductByBarcode(@Args() args: GetProductByBarcodeArgs) {
    const product = this.client
      .send<Product, GetProductByBarcode>('products.findByBarcode', {
        barcode: args.barcode,
      })
      .pipe(timeout(TIMEOUT_TIME));

    return product;
  }

  @Mutation(() => Product)
  createProduct(@Args() args: CreateProductArgs) {
    const product = this.client
      .send<Product, CreateProductDto>('products.save', {
        barcode: args.barcode,
        name: args.name,
        description: args.description,
        image: args.image,
      })
      .pipe(timeout(TIMEOUT_TIME));

    return product;
  }

  @Mutation(() => Product)
  updateProduct(@Args() args: UpdateProductArgs) {
    const product = this.client
      .send<Product, UpdateProductDto>('products.findByBarcodeAndUpdate', {
        barcode: args.barcode,
        name: args.name,
        description: args.description,
        image: args.image,
      })
      .pipe(timeout(TIMEOUT_TIME));

    return product;
  }

  @Mutation(() => DeleteResponse)
  deleteProductByBarcode(@Args() args: GetProductByBarcodeArgs) {
    const response = this.client
      .send<void, GetProductByBarcode>('products.findByBarcodeAndDelete', {
        barcode: args.barcode,
      })
      .pipe(timeout(TIMEOUT_TIME));

    return response;
  }
}
