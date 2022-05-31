import { IsNumber, IsString, IsDate } from 'class-validator';
export class ClassDto {
  @IsNumber()
  class_id: number;

  @IsString()
  class_name: string;

  @IsNumber()
  Total_rg_st: number;

  @IsNumber()
  Total_rg_st_max: number;

  @IsString()
  starttime: string;

  @IsString()
  endtime: string;

  @IsString()
  day: string;

  @IsString()
  course_id: string;

  @IsString()
  Teach_id: string;

  @IsNumber()
  term: number;

  @IsNumber()
  year: number;
}
