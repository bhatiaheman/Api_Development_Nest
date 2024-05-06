/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SalesOrder } from "./sales.entity";

@Entity()
export class ExternalFactor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    value: number;

    
    @OneToMany(() => SalesOrder, salesOrder => salesOrder.externalFactor)
    salesOrders: SalesOrder[];
}
