import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitasModule } from './citas/citas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { MedicosModule } from './medicos/medicos.module';
import { HorasModule } from './horas/horas.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'subcitas',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),CitasModule, PacienteModule, TratamientoModule, ConsultorioModule, MedicosModule, HorasModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
