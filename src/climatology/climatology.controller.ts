import { Controller, Get, Query } from '@nestjs/common';
import { ClimatologyClient } from './climatology.client';

@Controller('climatology')
export class ClimatologyController {
  constructor(private readonly _climatologyClient: ClimatologyClient) {}

  @Get()
  async getClimateInfo(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ): Promise<object> {
    return await this._climatologyClient.fetchClimateData(latitude, longitude);
  }
}
