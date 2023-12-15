import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Defindic_IN_Expenses')
export class Defindic_IN_Expenses {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  year: number;

  @Column()
  QuarterID: number;

  @Column()
  TourTypeID: number;

  @Column()
  GoalTypeID: number;

  @Column()
  EconStatusID: number;

  @Column()
  RateID: number;

  @Column()
  GenderID: number;

  @Column()
  AgeGroupLocalID: number;

  @Column()
  SequenceID: number;

  @Column()
  Expence: number;

  @Column()
  Visits: number;
}
