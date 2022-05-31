import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryColumn()
  std_id: string;

  @Column()
  std_name: string;

  @Column()
  std_password: string;

  @Column()
  std_major: string;

  @Column()
  std_branch: string;

  @Column()
  std_sex: string;
}
