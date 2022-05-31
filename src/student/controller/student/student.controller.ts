import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { StudentService } from 'src/student/service/student/student.service';
@Controller('student')
export class StudentController {
  constructor(private uService: StudentService) {}

  @Post()
  create(@Body() student: StudentDto): Promise<StudentDto> {
    return this.uService.createS(student);
  }

  @Get()
  async loadAll(): Promise<StudentDto[]> {
    return this.uService.loadAllS();
  }

  @Get(':id')
  async loadOneS(@Param('id') id: string): Promise<StudentDto> {
    return this.uService.loadoneS(id);
  }

  // @Get(':id, :pass')
  // async loadOneStd(
  //   @Param('id') id: string,
  //   @Param('pass') pass: string,
  // ): Promise<StudentDto> {
  //   return this.uService.loadone(id, pass);
  // }

  @Delete(':id')
  async deleteAuser(@Param('id') id: string): Promise<any> {
    await this.uService.removeS(id);
    return { sucess: true };
  }

  @Put(':id')
  async updateAuser(
    @Param('id') id: string,
    @Body() udto: StudentDto,
  ): Promise<StudentDto> {
    const aUser = await this.uService.loadoneS(id);
    aUser.std_name = udto.std_name;
    aUser.std_password = udto.std_password;
    return await this.uService.createS(aUser);
  }
}
