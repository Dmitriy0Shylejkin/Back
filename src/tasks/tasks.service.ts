import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto) {
    if (!dto.text) {
      throw new BadRequestException('Text is required');
    }
    const task = await this.taskRepository.create(dto);
    return task;
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.taskRepository.findAll({
      order: [['id', 'ASC']],
    });
    return tasks;
  }

  async getTaskById(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    const [updatedRows] = await this.taskRepository.update(dto, {
      where: { id },
    });
    if (updatedRows === 0) {
      throw new NotFoundException('Task not found');
    }
    const updatedTask = await this.taskRepository.findOne({ where: { id } });
    return updatedTask;
  }

  async deleteTask(id: number): Promise<void> {
    const deletedRows = await this.taskRepository.destroy({ where: { id } });
    if (deletedRows === 0) {
      throw new NotFoundException('Task not found');
    }
  }
}
