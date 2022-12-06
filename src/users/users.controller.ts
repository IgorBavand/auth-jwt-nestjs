import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  findByEmail(@Param('email') email : string){
    return this.usersService.findByEmail(email);
  }

  @Get('all-users')
  findAll(){
    return this.usersService.findAll()
  }

  
}
