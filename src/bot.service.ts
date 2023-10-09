import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bot } from './bot.entity';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(Bot) private readonly botRepository: Repository<Bot>,
  ) {}

getBotDetails() {
    return this.botRepository.find();
  }

updateBotDetails(data: any){
    return this.botRepository
    .createQueryBuilder()
    .update()
    .set({
      token_id: data.token_id,
      name: data.name
    })
    .execute()
  }
}

  
