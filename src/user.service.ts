import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // findBy(createUserDto: CreateUserDto){
  //   return  this.userRepository
  //   .createQueryBuilder()
  //   .select("t_user")
  //   .from(User,"t_user")
  //   .where('t_user.u_email = :email', { email: createUserDto.u_email })
  //   .execute()
  // }
  // async findOneBy(createUserDto: CreateUserDto): Promise<User | undefined> {
  //   // Find a user by email
  //   const user = await this.userRepository.findOne({ where: { u_email: createUserDto.u_email } });
  //   if (user) {
  //     throw new ConflictException('User with this email already exists');
  //   }
  //   return user;
  // }   


  // createUser(createUserDto: CreateUserDto) {
  //   const res = this.userRepository.findOneBy(createUserDto)
  //   const newUser = this.userRepository.create(createUserDto);
  //   console.log("newUser is : ", newUser)
    
  //   //const existingUser = await this.userRepository.findOne({ where: { u_email: createUserDto.u_email } });

   
  //   console.log("res is : ", res)
  //   return this.userRepository.save(newUser);
  // }

  // getUsers() {
  //   return this.userRepository.find();
  // }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Check if a user with the same email already exists
    const existingUser = await this.userRepository.findOne({ where: { u_email: createUserDto.u_email } });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Create a new user entity
    const newUser = this.userRepository.create(createUserDto);

    // Save the user entity to the database
    const savedUser = await this.userRepository.save(newUser);

    return savedUser;
  }

  async findOneBy(createUserDto: CreateUserDto): Promise<User | undefined> {
    // Find a user by email
    const user = await this.userRepository.findOne({ where: { u_email: createUserDto.u_email } });

    return user;
  }

  getUsers() {
    return this.userRepository.find();
  }

updateUser(uid: number, data: any): Promise<any> {
    return this.userRepository
    .createQueryBuilder()
    .update()
    .set({
      u_block: data.u_block
    })
    .where('uid = :uid', { uid })
    .execute()
}

deleteUser(uid: number): Promise<any> {
    return this.userRepository
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('uid = :uid', { uid })
    .execute()
  }

// findUsersById(uid: number) {
//     return this.userRepository.findOne(uid);
//   }
}

  
