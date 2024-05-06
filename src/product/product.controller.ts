/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dto/product_dto';
import { Product } from 'src/models/product.entity';
import { UpdateResult } from 'typeorm';

@Controller('product')
export class ProductController {

    constructor(

        private productService: ProductService
    ) {}

    @Get('get-all-products')
    async getAllProducts() {
        return this.productService.getProducts();
    } 

    @Post('create')
    async createProduct(@Body() productDTO: ProductDTO) {
        return await this.productService.createProducts(productDTO);
    }

    @Get('one-product/:id')
    async getOneProduct(@Param('id', ParseIntPipe) id:number): Promise<Product> {
        return await this.productService.findOne(id);
    }

    @Put('update-product/:id') 
    async updateProduct(@Param('id', ParseIntPipe) id:number, 
        @Body() updateProductDTO: ProductDTO): Promise<UpdateResult> {
            return await this.productService.updateProduct(id, updateProductDTO);
    }

    @Delete('delete-product/:id') 
    async deleteProduct(@Param('id', ParseIntPipe) id:number): Promise<void> {
        return await this.productService.remove(id);
    }
    
}
