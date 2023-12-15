import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Defindic_IN_Nights')
export class Defindic_IN_Nights {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  year: number;

  @Column()
  QuarterID: number;

  @Column()
  TourTypeID: number;

  @Column()
  SequenceID: number;

  @Column()
  GoalTypeID: number;

  @Column()
  RateID: number;

  @Column()
  AgeGroupLocalID: number;

  @Column()
  GenderID: number;

  @Column()
  EconStatusID: number;

  @Column()
  Nights: number;

  @Column()
  Visits: number;
}
