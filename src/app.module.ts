/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { ProductModule } from './product/product.module';
import { SalesModule } from './sales/sales.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductModule,
    SalesModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
