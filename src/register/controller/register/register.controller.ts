import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegisterDto } from 'src/register/dto/register.dto/register-dto';
import { RegisterService } from 'src/register/service/register/register.service';

@Controller('register')
export class RegisterController {
  constructor(private uService: RegisterService) {}

  @Post()
  create(@Body() register: RegisterDto): Promise<RegisterDto> {
    return this.uService.createS(register);
  }

  @Get(':id')
  async loadAllrg(@Param('id') id: string): Promise<RegisterDto[]> {
    return this.uService.loadrg(id);
  }
  @Get()
  async loadAll(): Promise<RegisterDto[]> {
    return this.uService.loadAllS();
  }
  @Delete(':id')
  async deleteAuser(@Param('id') id: string): Promise<any> {
    await this.uService.removeS(Number(id));
    return { sucess: true };
  }

  @Put(':id')
  async updateAuser(
    @Param('id') id: number,
    @Body() udto: RegisterDto,
  ): Promise<RegisterDto> {
    const aUser = await this.uService.loadone(id);
    aUser.class_id = udto.class_id;
    aUser.std_id = udto.std_id;
    return await this.uService.createS(aUser);
  }
}
