import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // Настройка CORS
  app.use(
    cors({
      origin: 'http://127.0.0.1:5501', // Замените на ваш фронтенд URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('NestJS')
    .setVersion('1.0.0')
    .addTag('Dmitriy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
