import { Controller, Get } from '@nestjs/common';
import { MainIndicatorsService } from 'src/visitors/services/main-indicators/main-indicators.service';

@Controller('main-indicators')
export class MainIndicatorsController {
  constructor(private readonly mainIndicatorsService: MainIndicatorsService) {}
  @Get('test')
  getTest() {
    return this.mainIndicatorsService.getTest();
  }
}
