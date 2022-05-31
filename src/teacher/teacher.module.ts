import { Module } from '@nestjs/common';
import { TeacherController } from './controller/teacher/teacher.controller';
import { TeacherService } from './service/teacher/teacher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEntity } from './entity/teacher.entity';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
  imports: [TypeOrmModule.forFeature([TeacherEntity])],
})
export class TeacherModule {}
