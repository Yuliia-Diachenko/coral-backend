import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://coral-backend-s1tf.onrender.com',
      'https://coral-frontend-u7qi.vercel.app',
    ],
    credentials: true,
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);
}
bootstrap();
