import { Test, TestingModule } from '@nestjs/testing';
import { MainIndicatorsController } from './main-indicators.controller';

describe('MainIndicatorsController', () => {
  let controller: MainIndicatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainIndicatorsController],
    }).compile();

    controller = module.get<MainIndicatorsController>(MainIndicatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
