/* eslint-disable prettier/prettier */
import {  TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Customer } from "src/models/customer.entity";
import { ExternalFactor } from "src/models/externalFactor.entity";
import { Location } from "src/models/location.entity";
import { Product } from "src/models/product.entity";
import { SalesOrder } from "src/models/sales.entity";
import { User } from "src/user/entities/user.entity";



// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();


class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
        throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
      }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
          type: 'postgres',
    
          host: this.getValue('POSTGRES_HOST'),
          port: parseInt(this.getValue('POSTGRES_PORT')),
          username: this.getValue('POSTGRES_USER'),
          password: this.getValue('POSTGRES_PASSWORD'),
          database: this.getValue('POSTGRES_DATABASE'),
    
          entities: [Product, SalesOrder, Customer, ExternalFactor, Location, User],
          synchronize: true,
          migrationsTableName: 'migration',
    
          migrations: ['src/migration/*.ts'],
    
          
        };
    }
     
}

const configService = new ConfigService(process.env)
  .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
  ]);

export { configService };