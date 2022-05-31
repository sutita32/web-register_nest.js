import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RegisterEntity {
  @PrimaryGeneratedColumn()
  rg_id: number;

  @Column()
  std_id: string;

  @Column()
  class_id: number;
}
