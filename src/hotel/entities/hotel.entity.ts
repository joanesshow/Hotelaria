
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn()
   id: number;

   @CreateDateColumn()
   dataHoraInicial: Date;

   @CreateDateColumn()
   dataHoraFinal: Date;

   @Column()
   quartoReservado: string;

   @Column()
   hospede: string;

    
} 
