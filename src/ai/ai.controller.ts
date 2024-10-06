import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';

@Controller('openai')
export class AIController {
  constructor(private readonly openAIService: AiService) {}

  @Post('generate')
  async generatePrompt(
    @Body('climateinfo') climateinfo: object,
    @Body('crops') crops: string[],
  ): Promise<object> {
    const response = (
      await this.openAIService.generateChatCompletion(climateinfo, crops)
    )
      .replaceAll(`\``, '')
      .replaceAll(`\n`, '')
      .replaceAll(`\r`, '')
      .replace(`json`, '')
      .trim();

    return JSON.parse(response);
  }
}
