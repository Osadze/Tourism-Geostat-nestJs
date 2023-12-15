import { Module } from '@nestjs/common';
import { MainIndicatorsController } from './controllers/main-indicators/main-indicators.controller';
import { MainIndicatorsService } from './services/main-indicators/main-indicators.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [MainIndicatorsController],
  providers: [MainIndicatorsService],
})
export class VisitorsModule {}
