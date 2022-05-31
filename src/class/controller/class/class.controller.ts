import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClassDto } from 'src/class/dto/class.dto/class-dto';
import { ClassService } from 'src/class/service/class/class.service';

@Controller('class')
export class ClassController {
  constructor(private uService: ClassService) {}

  @Post()
  create(@Body() C: ClassDto): Promise<ClassDto> {
    return this.uService.createS(C);
  }

  @Get()
  async loadAll(): Promise<ClassDto[]> {
    return this.uService.loadAllS();
  }
  @Get(':id')
  async search(@Param('id') id: number): Promise<any> {
    return this.uService.loadoneS(id);
  }
  @Delete(':id')
  async deleteAuser(@Param('id') id: string): Promise<any> {
    await this.uService.removeS(id);
    return { sucess: true };
  }

  @Put(':id')
  async updateAuser(
    @Param('id') id: number,
    @Body() udto: ClassDto,
  ): Promise<ClassDto> {
    const aUser = await this.uService.loadone(id);
    aUser.class_name = udto.class_name;
    aUser.Total_rg_st = udto.Total_rg_st;
    aUser.Total_rg_st_max = udto.Total_rg_st_max;
    aUser.starttime = udto.starttime;
    aUser.endtime = udto.endtime;
    aUser.day = udto.day;
    aUser.course_id = udto.course_id;
    aUser.Teach_id = udto.Teach_id;
    aUser.term = udto.term;
    aUser.year = udto.year;
    return await this.uService.createS(aUser);
  }
}
