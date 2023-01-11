import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { transformInterceptor } from './interceptors/transforme.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new transformInterceptor())

  await app.listen(3000);
}
bootstrap();
