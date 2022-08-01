import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from "./modules/products/products.module";
import { PriceParserModule } from "./modules/price-parser/price-parser.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./modules/products/entity/product.entity";

@Module({
  imports: [
    ProductsModule,
    PriceParserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '!michail.zyusko_2001!',
      database: 'benefit',
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
