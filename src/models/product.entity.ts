/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./sales.entity";

@Entity("product")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    
    @OneToMany(() => SalesOrder, salesOrder => salesOrder.product)
    salesOrders: SalesOrder[];
}