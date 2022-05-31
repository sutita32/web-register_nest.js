import { Module } from '@nestjs/common';
import { ClassController } from './controller/class/class.controller';
import { ClassService } from './service/class/class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEntity } from './entity/class.entity';
@Module({
  controllers: [ClassController],
  providers: [ClassService],
  imports: [TypeOrmModule.forFeature([ClassEntity])],
})
export class ClassModule {}
