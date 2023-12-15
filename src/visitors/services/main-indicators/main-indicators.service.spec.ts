import { Test, TestingModule } from '@nestjs/testing';
import { MainIndicatorsService } from './main-indicators.service';

describe('MainIndicatorsService', () => {
  let service: MainIndicatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainIndicatorsService],
    }).compile();

    service = module.get<MainIndicatorsService>(MainIndicatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
