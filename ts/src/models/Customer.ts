import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity({name: "customers"})
export class Customer {
    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name: string;
  
    @Column()
    socialName?: string;

    @Column()
    genre: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    birthday: Date;

    constructor(name:string, genre:string, email:string, phone:string, birthday:Date, socialName?: string){
        this.name = name;
        this.genre = genre;
        this.email  = email;
        this.phone = phone;
        this.birthday = birthday;
        this.socialName = socialName;
    }

}