import { IParserStrategy } from './interfaces/IParserStrategy';
import { Product } from "../../products/entity/product.entity";
import axios from "axios";
import { ProductsService } from "../../products/products.service";

type GreenProduct = {
  title: string;
  description: string;
  previewFile: {
    filename: string;
  };
  barcodes: [{
    code: string;
  }]
  storeProduct:{
    priceWithSale: number;
  }
}

class GreenParser implements IParserStrategy {
  private static instance: GreenParser;
  private API_URL = 'https://green-dostavka.by/api/v1/products';
  private IMAGE_URL = (imageName: string) => `https://shop-static.green-market.by/1400x1400-${imageName}`;
  private STORE_ID = 2;

  private constructor() {}

  public static getInstance(): GreenParser {
    if (!GreenParser.instance) {
      GreenParser.instance = new GreenParser();
    }

    return GreenParser.instance;
  }

  private async getProductById(productID: number): Promise<Product | null> {
    try {
      const { data, status } = await axios.get(`${this.API_URL}/${productID}`, {
        params: {
          storeId: this.STORE_ID,
        }
    });

      if (status !== 200) return null;

      const product = data as GreenProduct;

      return this.GreenProductMapper(product);
    } catch (e) {
      throw new Error(e);
    }
  }

  private GreenProductMapper(product: GreenProduct): Product {
    try {
      return {
        name: product.title,
        description: product.description,
        image: this.IMAGE_URL(product.previewFile.filename),
        barcode: product.barcodes[0].code,
        price: product.storeProduct.priceWithSale / 1e2,
      } as Product;
    }
    catch (error) {
      console.log(error);
    }
  }

  async parse(productsService: ProductsService): Promise<void> {
    try {
      console.time('Time');

      // Get the maximum amount of products from the API
      const { data: { count }, status } = await axios.get(this.API_URL, {
        params: {
          skip: 0,
          storeId: this.STORE_ID,
        }
      });

      console.log(`Count: ${count}`);

      if (status !== 200) throw new Error('Status is not 200');

      for (let i = 0; i <= count; i += 100) {
        const { data, status } = await axios.get(this.API_URL, {
          params: {
            skip: i,
            storeId: this.STORE_ID,
          }
        });

        if (status !== 200) {
          continue;
        }

        for (const { id } of data.items) {
          const product = await this.getProductById(id);

          if (product) {
            await productsService.createProduct(product);
          }
        }
      }
      console.timeEnd('Time');
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default GreenParser;
