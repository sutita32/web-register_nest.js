import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseDto } from 'src/course/dto/course.dto/course-dto';
import { CourseService } from 'src/course/service/course/course.service';

@Controller('course')
export class CourseController {
  constructor(private uService: CourseService) {}

  @Post()
  create(@Body() course: CourseDto): Promise<CourseDto> {
    return this.uService.createS(course);
  }

  @Get()
  async loadAll(): Promise<CourseDto[]> {
    return this.uService.loadAllS();
  }

  @Get(':keyword')
  async loadOneS(@Param('keyword') keyword: string): Promise<any> {
    return this.uService.loadone(keyword);
  }
  @Delete(':id')
  async deleteAuser(@Param('id') id: string): Promise<any> {
    await this.uService.removeS(id);
    return { sucess: true };
  }

  @Put(':id')
  async updateAuser(
    @Param('id') id: string,
    @Body() udto: CourseDto,
  ): Promise<CourseDto> {
    const aUser = await this.uService.loadone(id);
    aUser.course_id = udto.course_id;
    aUser.course_name = udto.course_name;
    aUser.credit = udto.credit;
    return await this.uService.createS(aUser);
  }
}
