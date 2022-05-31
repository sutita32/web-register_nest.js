import { Module } from '@nestjs/common';
import { CourseController } from './controller/course/course.controller';
import { CourseService } from './service/course/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entity/course.entity';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [TypeOrmModule.forFeature([CourseEntity])],
})
export class CourseModule {}
