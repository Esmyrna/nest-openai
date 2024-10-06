import { Module } from '@nestjs/common';
import { ClimatologyModule } from './climatology/climatology.module';

@Module({ imports: [ClimatologyModule] })
export class AppModule {}
