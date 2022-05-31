import { Module } from '@nestjs/common';
import { RegisterController } from './controller/register/register.controller';
import { RegisterService } from './service/register/register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEntity } from './entity/register.entity';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService],
  imports: [TypeOrmModule.forFeature([RegisterEntity])],
})
export class RegisterModule {}
