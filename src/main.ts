import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';

createConnection()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5432);
}
bootstrap();
