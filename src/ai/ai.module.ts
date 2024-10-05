import { Module } from '@nestjs/common';
import { OpenAI } from 'openai';

@Module({
  providers: [{ provide: OpenAI, useValue: new OpenAI({ apiKey: '' }) }],
})
export class AiModule {}
