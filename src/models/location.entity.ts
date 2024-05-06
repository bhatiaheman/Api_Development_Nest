/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./sales.entity";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    
    @OneToMany(() => SalesOrder, salesOrder => salesOrder.location)
    salesOrders: SalesOrder[];
}