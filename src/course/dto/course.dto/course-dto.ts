import { IsNumber, IsString } from 'class-validator';
export class CourseDto {
  @IsString()
  course_id: string;

  @IsString()
  course_name: string;

  @IsNumber()
  credit: number;
}
