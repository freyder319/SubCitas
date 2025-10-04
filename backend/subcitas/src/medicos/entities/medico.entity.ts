import { CitaEntity } from 'src/citas/entities/cita.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('medicos')
export class MedicoEntity {
  @PrimaryColumn({ type: 'char', length: 10 })
  MedIdentificacion: string; // PK

  @Column({ type: 'varchar', length: 50, nullable: false })
  MedNombres: string; // NOT NULL

  @Column({ type: 'varchar', length: 50, nullable: false })
  MedApellidos: string; // NOT NULL

  @Column({ type: 'varchar', length: 100, nullable: false })
  correo_medico: string; // NOT NULL

  @Column({ type: 'varchar', length: 100, nullable: false })
  contrasenia: string; // NOT NULL

  // Relación: Un médico puede tener muchas citas
  @OneToMany(() => CitaEntity, cita => cita.Medico)
  Citas: CitaEntity[];
}