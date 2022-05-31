import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseDto } from 'src/course/dto/course.dto/course-dto';
import { CourseEntity } from 'src/course/entity/course.entity';

@Injectable()
export class CourseService {
  public Course: CourseDto[] = [];
  constructor(
    @InjectRepository(CourseEntity)
    private userRepository: Repository<CourseEntity>,
  ) {}
  createS(auser: CourseDto): Promise<CourseDto> {
    return this.userRepository.save(auser);
  }

  loadAllS(): Promise<CourseDto[]> {
    return this.userRepository.find();
  }

  async removeS(uid: string): Promise<void> {
    await this.userRepository.delete(uid);
  }

  async loadone(uid: string): Promise<any> {
    return await this.userRepository.query(
      `SELECT * FROM course_entity join class_entity join teacher_entity
      on course_entity.course_id = class_entity.course_id AND class_entity.Teach_id = teacher_entity.Teach_id
      WHERE teacher_entity.Teach_id = ${uid}`,
    );
  }
}
