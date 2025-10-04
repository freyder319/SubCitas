import { ConsultorioEntity } from 'src/consultorio/entities/consultorio.entity';
import { MedicoEntity } from 'src/medicos/entities/medico.entity';
import { PacienteEntity } from 'src/paciente/entities/paciente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

export enum CitEstado {
  ASIGNADA = 'Asignada',
  CUMPLIDA = 'Cumplida',
  SOLICITADA = 'Solicitada',
  CANCELADA = 'Cancelada',
}

@Entity('citas')
export class CitaEntity {
  @PrimaryGeneratedColumn('increment')
  CitNumero: number; // PK, AUTO_INCREMENT

  @Column({ type: 'date', nullable: false })
  CitFecha: Date; // NOT NULL

  @Column({ type: 'varchar', length: 10, nullable: false })
  CitHora: string; // NOT NULL (varchar en SQL, se usa string)

  // Clave foránea a Pacientes
  @ManyToOne(() => PacienteEntity, paciente => paciente.Citas)
  @JoinColumn({ name: 'CitPaciente' }) // Nombre de la columna FK en la tabla citas
  Paciente: PacienteEntity;

  // Clave foránea a Médicos
  @ManyToOne(() => MedicoEntity, medico => medico.Citas)
  @JoinColumn({ name: 'CitMedico' }) // Nombre de la columna FK en la tabla citas
  Medico: MedicoEntity;

  // Clave foránea a Consultorios
  @ManyToOne(() => ConsultorioEntity, consultorio => consultorio.Citas)
  @JoinColumn({ name: 'CitConsultorio' }) // Nombre de la columna FK en la tabla citas
  Consultorio: ConsultorioEntity;

  @Column({ 
    type: 'enum', 
    enum: CitEstado, 
    default: CitEstado.ASIGNADA,
    nullable: false 
  })
  CitEstado: CitEstado; // ENUM

  @Column({ type: 'varchar', length: 50, nullable: false })
  CitObservaciones: string; // NOT NULL
}