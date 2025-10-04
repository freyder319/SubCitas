import { CitaEntity } from 'src/citas/entities/cita.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('consultorios')
export class ConsultorioEntity {
  @PrimaryColumn({ type: 'int', width: 3 })
  ConNumero: number; // PK

  @Column({ type: 'varchar', length: 50, nullable: false })
  ConNombre: string; // NOT NULL

  // Relación: Un consultorio puede tener muchas citas
  @OneToMany(() => CitaEntity, cita => cita.Consultorio)
  Citas: CitaEntity[];
}