import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeacherDto } from 'src/teacher/dto/teacher.dto/teacher-dto';
import { TeacherEntity } from 'src/teacher/entity/teacher.entity';

@Injectable()
export class TeacherService {
  public Student: TeacherDto[] = [];
  constructor(
    @InjectRepository(TeacherEntity)
    private userRepository: Repository<TeacherEntity>,
  ) {}
  createS(auser: TeacherDto): Promise<TeacherDto> {
    return this.userRepository.save(auser);
  }

  loadAllS(): Promise<TeacherDto[]> {
    return this.userRepository.find();
  }

  async removeS(uid: string): Promise<void> {
    await this.userRepository.delete(uid);
  }

  async loadoneS(uid: string): Promise<TeacherDto> {
    return await this.userRepository.findOne({ Teach_id: uid });
  }
}
