import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from "./modules/products/products.module";
import { PriceParserModule } from "./modules/price-parser/price-parser.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./modules/products/entity/product.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ProductsModule,
    PriceParserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
