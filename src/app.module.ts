import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { RegisterModule } from './register/register.module';
import { ClassModule } from './class/class.module';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student/entity/student.entity';
import { RegisterEntity } from './register/entity/register.entity';
import { ClassEntity } from './class/entity/class.entity';
import { CourseEntity } from './course/entity/course.entity';
import { TeacherEntity } from './teacher/entity/teacher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/project1.db',
      entities: [
        StudentEntity,
        RegisterEntity,
        ClassEntity,
        CourseEntity,
        TeacherEntity,
      ],
      synchronize: true,
    }),
    StudentModule,
    RegisterModule,
    ClassModule,
    CourseModule,
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
