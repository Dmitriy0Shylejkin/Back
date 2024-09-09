import { Module } from '@nestjs/common';

import { Task } from './tasks.model';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [SequelizeModule.forFeature([Task])],
  exports: [TasksService],
})
export class TasksModule {}
