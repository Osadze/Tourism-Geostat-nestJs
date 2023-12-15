import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Defindic_IN_Polices } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MainIndicatorsService {
  constructor(
    @InjectRepository(Defindic_IN_Polices)
    private Defindic_IN_PolicesRepo: Repository<Defindic_IN_Polices>,
  ) {}

  async getTest() {
    return await this.Defindic_IN_PolicesRepo.createQueryBuilder(
      'Defindic_IN_Polices',
    )
      .select('Defindic_IN_Polices.year as year')
      .addSelect('SUM(Defindic_IN_Polices.Quantity) as totalQuantity')
      .groupBy('Defindic_IN_Polices.year')
      .orderBy('Defindic_IN_Polices.year', 'ASC')
      .getRawMany();
  }
}
