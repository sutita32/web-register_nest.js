import { IsNumber, IsString } from 'class-validator';

export class StudentDto {
  @IsString()
  std_id: string;

  @IsString()
  std_name: string;

  @IsString()
  std_password: string;

  @IsString()
  std_major: string;

  @IsString()
  std_branch: string;

  @IsString()
  std_sex: string;
}
