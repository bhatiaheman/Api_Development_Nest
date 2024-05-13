/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Post('signup')
  async signup(@Body() userDTO: CreateUserDto): Promise<User> {
    return await this.userService.create(userDTO);
  }

  @Post('login') 
  async login(@Body() loginDTO: LoginDTO) {
    return await this.authService.login(loginDTO);
  }

  
}
