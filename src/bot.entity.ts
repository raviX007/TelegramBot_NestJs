import { Entity, Column, PrimaryColumn } from 'typeorm';
 
@Entity('BotDetails')
export class Bot {
  @PrimaryColumn()
  token_id: string;
 
  @Column()
  name: string;
  
  
}