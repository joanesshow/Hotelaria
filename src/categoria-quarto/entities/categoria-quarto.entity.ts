import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class CategoriaQuarto {
    @PrimaryGeneratedColumn()
     id: number;

     @Column()
     descricao: string;

}
