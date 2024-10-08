import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateTaskDto,
  ): Promise<Task> {
    return await this.tasksService.updateTask(id, dto);
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    return await this.tasksService.deleteTask(id);
  }
}
