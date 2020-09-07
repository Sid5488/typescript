import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("customers")
class Customer {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column()
    cpf: string

    @Column()
    email: string

    @Column()
    phone: string

}

export default Customer;
