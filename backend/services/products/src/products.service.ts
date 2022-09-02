import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductByBarcode } from './dto/get-product-by-barcode.dto';
import { GetProductsDto } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entity/product.entity';
import { DBException, DBExceptions } from './exceptions/DBException';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async find({ take, skip }: GetProductsDto) {
    return this.productRepository.find({
      take,
      skip,
      cache: {
        id: 'products',
        milliseconds: 1e5,
      },
    });
  }

  async findByBarcode({ barcode }: GetProductByBarcode) {
    const product = await this.productRepository.findOneBy({ barcode });

    if (!product)
      throw new DBException({
        message: `Product with barcode: ${barcode} not found`,
        code: DBExceptions.PRODUCT_NOT_FOUND,
      });

    return product;
  }

  async findByBarcodeAndUpdate(updateProductDto: UpdateProductDto) {
    const { barcode, ...updatedBody } = updateProductDto;

    const product = await this.productRepository.findOneBy({ barcode });

    if (!product)
      throw new DBException({
        message: `Product with barcode: ${barcode} not found`,
        code: DBExceptions.PRODUCT_NOT_FOUND,
      });

    const {
      raw: [result],
    } = await this.productRepository
      .createQueryBuilder()
      .update(updatedBody)
      .where('barcode = :barcode', { barcode })
      .returning('*')
      .updateEntity(true)
      .execute();

    return result;
  }

  async findByBarcodeAndDelete({ barcode }: GetProductByBarcode) {
    const product = await this.productRepository.findOneBy({ barcode });

    if (!product)
      throw new DBException({
        message: `Product with barcode: ${barcode} not found`,
        code: DBExceptions.PRODUCT_NOT_FOUND,
      });
    await this.productRepository.remove(product);
  }

  async save(createProductDto: CreateProductDto) {
    const { barcode } = createProductDto;

    const product = await this.productRepository.findOneBy({ barcode });

    if (product)
      throw new DBException({
        message: `Product with barcode: ${barcode} already exists`,
        code: DBExceptions.PRODUCT_ALREADY_EXISTS,
      });

    // const connection = getConnection();
    // await connection.queryResultCache.remove(['products']);

    return this.productRepository.save(createProductDto);
  }
}
