import { PacienteEntity } from 'src/paciente/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
@Entity('tratamientos')
export class TratamientoEntity {
  @PrimaryGeneratedColumn('increment')
  TraNumero: number; // PK, AUTO_INCREMENT

  @Column({ type: 'date', nullable: false })
  TraFechaAsignado: Date; // NOT NULL

  @Column({ type: 'text', nullable: false })
  TraDescripcion: string; // NOT NULL

  @Column({ type: 'date', nullable: false })
  TraFechaInicio: Date; // NOT NULL

  @Column({ type: 'date', nullable: false })
  TraFechaFin: Date; // NOT NULL

  @Column({ type: 'text', nullable: false })
  TraObservaciones: string; // NOT NULL

  // Clave foránea a Pacientes
  @ManyToOne(() => PacienteEntity, paciente => paciente.Tratamientos)
  @JoinColumn({ name: 'TraPaciente' }) // Nombre de la columna FK en la tabla tratamientos
  Paciente: PacienteEntity;
}