import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeacherDto } from 'src/teacher/dto/teacher.dto/teacher-dto';
import { TeacherService } from 'src/teacher/service/teacher/teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private uService: TeacherService) {}

  @Post()
  create(@Body() student: TeacherDto): Promise<TeacherDto> {
    return this.uService.createS(student);
  }

  @Get()
  async loadAll(): Promise<TeacherDto[]> {
    return this.uService.loadAllS();
  }
  @Get(':id')
  async loadOneS(@Param('id') id: string): Promise<TeacherDto> {
    return this.uService.loadoneS(id);
  }
  @Delete(':id')
  async deleteAuser(@Param('id') id: string): Promise<any> {
    await this.uService.removeS(id);
    return { sucess: true };
  }

  @Put(':id')
  async updateAuser(
    @Param('id') id: string,
    @Body() udto: TeacherDto,
  ): Promise<TeacherDto> {
    const aUser = await this.uService.loadoneS(id);
    aUser.Teach_name = udto.Teach_name;
    aUser.Teach_password = udto.Teach_password;
    return await this.uService.createS(aUser);
  }
}
