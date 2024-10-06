import { Module } from '@nestjs/common';
import { ClimatologyClient } from './climatology.client';
import { ClimatologyController } from './climatology.controller';

@Module({
  providers: [ClimatologyClient],
  controllers: [ClimatologyController],
})
export class ClimatologyModule {}
