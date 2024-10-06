import { Module } from '@nestjs/common';
import { ClimatologyModule } from './climatology/climatology.module';
import { AiModule } from './ai/ai.module';

@Module({ imports: [ClimatologyModule, AiModule] })
export class AppModule {}
