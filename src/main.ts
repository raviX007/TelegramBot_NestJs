import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { BotServiceOld } from './BotService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  };
  app.enableCors(options);
  await app.listen(5000);
  
  const bs= new BotServiceOld();
  bs.botMessage();
  console.log("Bot Service Started");
}
bootstrap();
