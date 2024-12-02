import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQL_AUTH_URL],
      queue:  RabbitMQ.AuthQueue, 
      queueOptions: {
        durable: true, 
      },
    },
  });
  await app.listen();
}
bootstrap();
