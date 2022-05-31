import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  class_id: number;

  @Column()
  class_name: string;

  @Column()
  Total_rg_st: number;

  @Column()
  Total_rg_st_max: number;

  @Column()
  starttime: string;

  @Column()
  endtime: string;

  @Column()
  day: string;

  @Column()
  course_id: string;

  @Column()
  Teach_id: string;

  @Column()
  term: number;

  @Column()
  year: number;
}
