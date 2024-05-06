/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./sales.entity";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    // Define relationships
    @OneToMany(() => SalesOrder, salesOrder => salesOrder.customer)
    salesOrders: SalesOrder[];
}