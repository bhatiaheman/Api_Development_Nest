/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { ProductModule } from './product/product.module';
import { SalesModule } from './sales/sales.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductModule,
    SalesModule,
    UserModule,
    AuthModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
