/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";


export class LoginDTO {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}