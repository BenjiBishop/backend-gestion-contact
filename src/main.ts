import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as cors from 'cors';
import * as express from 'express';

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server)
    );
    app.use(cors({
      origin: 'http://localhost:3000', // configure l'origine autorisée à partir de laquelle les requêtes seront acceptées
      // allowedHeaders: ['Content-Type'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // configure les méthodes HTTP qui sont autorisées dans les requêtes
    }));
    
  await app.listen(3001);
}
bootstrap();
