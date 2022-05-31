import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDto } from 'src/student/dto/student.dto/student-dto';
import { StudentEntity } from 'src/student/entity/student.entity';

@Injectable()
export class StudentService {
  public Student: StudentDto[] = [];
  constructor(
    @InjectRepository(StudentEntity)
    private userRepository: Repository<StudentEntity>,
  ) {}
  createS(auser: StudentDto): Promise<StudentDto> {
    return this.userRepository.save(auser);
  }

  loadAllS(): Promise<StudentDto[]> {
    return this.userRepository.find();
  }

  async removeS(uid: string): Promise<void> {
    await this.userRepository.delete(uid);
  }

  async loadone(uid: string, pass: string): Promise<StudentDto> {
    return await this.userRepository.findOne({
      std_id: uid,
      std_password: pass,
    });
  }
  async loadoneS(uid: string): Promise<StudentDto> {
    return await this.userRepository.findOne({ std_id: uid });
  }
}
