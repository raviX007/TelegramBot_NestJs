import {
  Body,
    Controller,
    Get,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateBotDto } from './bot.dto';
  import { BotService } from './bot.service';
  
  @Controller('bot')
  export class BotController {
    constructor(private readonly botService: BotService) {}
  
    @Get()
    getbot() {
      return this.botService.getBotDetails();
    }

    @Put()
    @UsePipes(ValidationPipe)
    updateBot(@Body() data: CreateBotDto) {
      console.log("data is : ", data)
      return this.botService.updateBotDetails(data);
    }
  }