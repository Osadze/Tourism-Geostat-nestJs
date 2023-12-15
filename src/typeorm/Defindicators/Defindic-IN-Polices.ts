import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Defindic_IN_Polices')
export class Defindic_IN_Polices {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  year: number;

  @Column()
  QuarterID: number;

  @Column()
  MonthID: number;

  @Column()
  TourTypeID: number;

  @Column()
  GenderID: number;

  @Column()
  AgeGroupID: number;

  @Column()
  Quantity: number;
}
