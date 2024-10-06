import { Module } from '@nestjs/common';
import { ClimatologyModule } from './climatology/climatology.module';
import { AiService } from './ai/ai-service.service';

@Module({ imports: [ClimatologyModule, AiService] })
export class AppModule {}
