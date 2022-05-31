import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassDto } from 'src/class/dto/class.dto/class-dto';
import { ClassEntity } from 'src/class/entity/class.entity';

@Injectable()
export class ClassService {
  public Course: ClassDto[] = [];
  constructor(
    @InjectRepository(ClassEntity)
    private userRepository: Repository<ClassEntity>,
  ) {}
  createS(auser: ClassDto): Promise<ClassDto> {
    // return this.userRepository.query(`INSERT INTO register(std_id,class_id,term,year) VALUES (${auser.},'$stdid')"`)
    return this.userRepository.save(auser);
  }

  // loadAllS(): Promise<ClassDto[]> {
  //   return this.userRepository.find();
  // }
  async loadAllS(): Promise<ClassDto[]> {
    return await this.userRepository.query(
      'SELECT * FROM course_entity JOIN class_entity JOIN teacher_entity \
        on course_entity.course_id = class_entity.course_id AND class_entity.Teach_id = teacher_entity.Teach_id',
    );
  }

  async removeS(uid: string): Promise<void> {
    await this.userRepository.delete(uid);
  }

  async loadone(uid: number): Promise<ClassDto> {
    return await this.userRepository.findOne({ class_id: uid });
  }
  async loadoneS(uid: number): Promise<any> {
    return await this.userRepository.query(
      `SELECT * FROM register_entity JOIN class_entity JOIN student_entity on register_entity.class_id = class_entity.class_id AND register_entity.std_id = student_entity.std_id WHERE class_entity.class_id = ${uid}`,
    );
  }
}
