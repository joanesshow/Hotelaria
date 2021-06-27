import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Hospede {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;

    @Column()
    cidade: string;
}
