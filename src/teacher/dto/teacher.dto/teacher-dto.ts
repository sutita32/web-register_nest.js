import { IsNumber, IsString, IsDate } from 'class-validator';
export class TeacherDto {
  @IsString()
  Teach_id: string;

  @IsString()
  Teach_name: string;

  @IsString()
  Teach_password: string;

  @IsString()
  Teach_level: string;
}
