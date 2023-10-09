import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('t_user')
export class User {
  @PrimaryGeneratedColumn()
  uid: number;
 
  @Column()
  u_name: string;
  
  @Column()
  u_email: string;

  @Column()
  u_block: string;
}