import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  

 

  // @Get('uid/:uid')
  // findUsersById(@Param('uid', ParseIntPipe) uid: number) {
  //   return this.userService.findUsersById(uid);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':uid')
  updateUser(@Param('uid', ParseIntPipe) uid: number, @Body() createUserDto: CreateUserDto) {
    return this.userService.updateUser(uid, createUserDto);
  }
  

  @Delete(':uid')
  deleteUser(@Param('uid', ParseIntPipe) uid: number) {
    return this.userService.deleteUser(uid);
  }
}