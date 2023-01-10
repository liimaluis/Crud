import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userModel{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 120})
    name: string;

    @Column()
    telefonefixo: number;

    @Column()
    telefonecel: number;

    @Column('int')
    cep: number;
}