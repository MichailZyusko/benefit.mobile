import { Module } from '@nestjs/common';
import { PriceParserController } from './price-parser.controller';
import { PriceParserService } from './price-parser.service';
import { ProductsModule } from "../products/products.module";

@Module({
  imports: [ProductsModule],
  controllers: [PriceParserController],
  providers: [PriceParserService]
})
export class PriceParserModule {}
