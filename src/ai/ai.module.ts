import { Module } from '@nestjs/common';
import { OpenAI } from 'openai';
import * as DotEnv from 'dotenv';
import { AIController } from './ai.controller';
import { AiService } from './ai.service';

DotEnv.config();

@Module({
  providers: [
    {
      provide: OpenAI,
      useValue: new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    },
    AiService,
  ],
  controllers: [AIController],
})
export class AiModule {}
