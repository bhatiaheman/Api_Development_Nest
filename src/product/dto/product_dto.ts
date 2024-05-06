/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "@nestjs/class-validator";



export class ProductDTO {

    @IsNotEmpty()
    public  id: number;
    
    @IsNotEmpty()
    @IsString()
    public  name: string;
  
    @IsNotEmpty()
    @IsString()
    public category: string;
  
}