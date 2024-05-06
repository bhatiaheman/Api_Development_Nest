/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.entity';
import {  Repository, UpdateResult } from 'typeorm';
import { ProductDTO } from './dto/product_dto';

@Injectable()
export class ProductService {


    constructor(@InjectRepository(Product)

    private productRepository: Repository<Product>

    ) {}

    async getProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async createProducts(productDTO : ProductDTO): Promise<Product> {
        const product = new Product();
        product.id = productDTO.id;
        product.name = productDTO.name;
        product.category = productDTO.category;
       return await this.productRepository.save(product);
    }

    async updateProduct(id: number, updateProductDTO: ProductDTO) : Promise<UpdateResult> {

        const product = await this.findOne(id);
        product.name = updateProductDTO.name;
        product.category = updateProductDTO.category;
        return await this.productRepository.update(id, product);
    }

    async findOne(id: number): Promise<Product> {
        return await this.productRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void> {
        const product = await this.findOne(id);
        await this.productRepository.delete(product);
    }

    
}
