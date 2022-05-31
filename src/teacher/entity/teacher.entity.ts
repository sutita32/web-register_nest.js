import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class TeacherEntity {
  @PrimaryColumn()
  Teach_id: string;

  @Column()
  Teach_name: string;

  @Column()
  Teach_password: string;

  @Column()
  Teach_level: string;
}
