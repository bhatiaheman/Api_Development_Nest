/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}


  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
    const user = await this.userRepository.save(createUserDto);
    delete user.password;
    return user;
  }

  async findOne(data: Partial<User>) :Promise<User> {
    const user = await this.userRepository.findOneBy({email: data.email});
    if(!user) {
      throw new UnauthorizedException('Could not find user');
    }

    return user;
  }

  
}
