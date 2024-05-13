/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async login(loginDTO: LoginDTO) : Promise<{accessToken: string}> {
        const user = await this.userService.findOne(loginDTO);
        const passwordMatched = await bcrypt.compare(
            loginDTO.password,
            user.password
        );

        if(passwordMatched) {
            //delete user.password;
            //return user;
            const payload = {email: user.email, sub: user.id}
            return {
                accessToken: this.jwtService.sign(payload),
            };

        } else {
            throw new UnauthorizedException("Password Doesnt Match");
        }
    }
  
}
