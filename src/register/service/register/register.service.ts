import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/register/dto/register.dto/register-dto';
import { RegisterEntity } from 'src/register/entity/register.entity';

@Injectable()
export class RegisterService {
  public Register: RegisterDto[] = [];
  constructor(
    @InjectRepository(RegisterEntity)
    private userRepository: Repository<RegisterEntity>,
  ) {}

  createS(auser: RegisterDto): Promise<RegisterDto> {
    // return this.userRepository.query(
    //   `INSERT INTO register(std_id,class_id,term,year) VALUES (${auser.std_id},${auser.class_id},${auser.term},${auser.year})`,
    // );
    return this.userRepository.save(auser);
  }

  loadAllS(): Promise<RegisterDto[]> {
    return this.userRepository.find();
  }

  async loadrg(stid: string): Promise<any> {
    return await this.userRepository.query(
      `SELECT * FROM course_entity join class_entity join register_entity 
      on course_entity.course_id = class_entity.course_id AND register_entity.class_id = class_entity.class_id 
      WHERE register_entity.std_id= ${stid} ORDER BY class_entity.year DESC, class_entity.term ASC`,
    );
  }

  async removeS(uid: number): Promise<void> {
    await this.userRepository.delete({ rg_id: uid });
  }

  async loadone(uid: number): Promise<RegisterDto> {
    return await this.userRepository.findOne({ rg_id: uid });
  }
}
