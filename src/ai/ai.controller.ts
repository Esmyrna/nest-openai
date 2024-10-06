import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from 'src/ai/ai-service.service';

@Controller('openai')
export class AIController {
  constructor(private readonly openAIService: AiService) {}

  @Post('generate')
  async generatePrompt(@Body('prompt') prompt: string) {
    const response = await this.openAIService.generateChatCompletion(prompt);
    return { response };
  }
}
