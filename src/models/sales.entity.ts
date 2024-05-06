/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";
import { ExternalFactor } from "./externalFactor.entity";
import { Product } from "./product.entity";
import { Location } from "./location.entity"

@Entity()
export class SalesOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    timestamp: Date;

    
    product: Product;

    @ManyToOne(() => Customer, customer => customer.salesOrders)
    customer: Customer;

    @ManyToOne(() => Location, location => location.salesOrders)
    location: Location; 
   
    @ManyToOne(() => ExternalFactor, externalFactor => externalFactor.salesOrders)
    externalFactor: ExternalFactor;
}