import { Module } from '@nestjs/common';
import { StudentService } from './service/student/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entity/student.entity';
import { StudentController } from './controller/student/student.controller';
@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
