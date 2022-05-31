import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class CourseEntity {
  @PrimaryColumn()
  course_id: string;

  @Column()
  course_name: string;

  @Column()
  credit: number;
}
