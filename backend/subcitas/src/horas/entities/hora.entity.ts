import { Entity, PrimaryColumn } from 'typeorm';

@Entity('horas')
export class HoraEntity {
  @PrimaryColumn('time') 
  hora: string; 
}