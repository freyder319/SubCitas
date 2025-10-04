import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { CitaEntity } from 'src/citas/entities/cita.entity';
import { TratamientoEntity } from 'src/tratamiento/entities/tratamiento.entity';

@Entity('pacientes')
export class PacienteEntity {
  @PrimaryColumn({ type: 'char', length: 10 })
  PacIdentificacion: string; // PK

  @Column({ type: 'varchar', length: 50, nullable: false })
  PacNombres: string; // NOT NULL

  @Column({ type: 'varchar', length: 50, nullable: true })
  PacApellidos: string; // NULLABLE

  @Column({ type: 'date', nullable: false })
  PacFechaNacimiento: Date; // NOT NULL

  @Column({ type: 'enum', enum: ['M', 'F'], nullable: false })
  PacSexo: 'M' | 'F'; // ENUM

  @Column({ type: 'varchar', length: 100, nullable: false })
  correoPaciente: string; // NOT NULL

  @Column({ type: 'varchar', length: 100, nullable: false })
  contrasenia: string; // NOT NULL

  // Relación: Un paciente puede tener muchas citas
  @OneToMany(() => CitaEntity, cita => cita.Paciente)
  Citas: CitaEntity[];

  // Relación: Un paciente puede tener muchos tratamientos
  @OneToMany(() => TratamientoEntity, tratamiento => tratamiento.Paciente)
  Tratamientos: TratamientoEntity[];
}