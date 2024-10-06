import { HttpException, HttpStatus } from '@nestjs/common';

export class ClimatologyClient {
  private readonly baseUrl: string =
    'https://power.larc.nasa.gov/api/temporal/climatology/point';
  private readonly user: string = 'Mangue';
  private readonly startYear: number = 2021;
  private readonly endYear: number = 2022;
  private readonly parameters: string[] = [
    'EVLAND',
    'GWETPROF',
    'GWETROOT',
    'GWETTOP',
    'QV10M',
    'TQV',
    'TO3',
    'TS',
    'ALLSKY_SFC_UV_INDEX',
    'ALLSKY_SFC_UVA',
  ];

  // Função para construir a URL
  private buildUrl(latitude: number, longitude: number): string {
    return `${this.baseUrl}?start=${this.startYear}&end=${this.endYear}&latitude=${latitude}&longitude=${longitude}&community=ag&parameters=${this.parameters.join(',')}&format=json&user=${this.user}&header=true`;
  }

  // Função para fazer a requisição
  async fetchClimateData(latitude: number, longitude: number): Promise<object> {
    const url = this.buildUrl(latitude, longitude);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);

      throw new HttpException(
        'Oops there was a failure on our provider',
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
  }
}
