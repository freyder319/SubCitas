import { Module } from '@nestjs/common';
import { HorasService } from './horas.service';
import { HorasController } from './horas.controller';

@Module({
  controllers: [HorasController],
  providers: [HorasService],
})
export class HorasModule {}
