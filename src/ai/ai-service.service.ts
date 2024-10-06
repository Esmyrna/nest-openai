/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { AiConstants } from './ai.constants';

@Injectable()
export class AiService {
  constructor(private readonly _aiProvider: OpenAI) {}

  async generateChatCompletion(climateinfo: object, crops: string[]): Promise<string> {
    try {
      let treatedprompt = AiConstants._prompt.replace('<ObjectPlaceholder>', JSON.stringify(climateinfo)).replace('<CropsPlaceholder>',crops.join(', '))
      const response = await this._aiProvider.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: treatedprompt,
          },
        ],
        max_tokens: 500,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error generating response:', error);

      throw new HttpException('Oops there was a failure on our provider', HttpStatus.FAILED_DEPENDENCY);

    }
  }
}
