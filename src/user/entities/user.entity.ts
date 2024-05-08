/* eslint-disable prettier/prettier */
import { Column, Entity } from "typeorm";

@Entity("users")
export class User {

    
    @Column({unique: true})
    email: string;

    @Column()
    password: string;
}
