import { IsNumber, IsString } from 'class-validator';

export class RegisterDto {
  @IsNumber()
  rg_id: number;

  @IsString()
  std_id: string;

  @IsNumber()
  class_id: number;
}
