import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProductsModule } from './products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductsModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'product',
          brokers: ['127.0.0.1:9092'],
        },
      },
    },
  );

  app.listen();
}
bootstrap();
