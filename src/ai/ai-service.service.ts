/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
 
@Injectable()
export class AiServiceService {
  constructor(  private readonly _aiProvider: OpenAI,) {}

  async generateChatCompletion(prompt: string): Promise<string> {
    try {
      const response = await this._aiProvider.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 500,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error generating response:', error);
      
      throw new HttpException(
        'Error communicating with OpenAI API',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
