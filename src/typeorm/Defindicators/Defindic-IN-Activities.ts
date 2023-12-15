import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Defindic_IN_Activities')
export class Defindic_IN_Activities {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  year: number;

  @Column()
  QuarterID: number;

  @Column()
  TourTypeID: number;

  @Column()
  VisitActivityID: number;

  @Column()
  Quantity: number;
}
