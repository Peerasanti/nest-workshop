import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {

  constructor( @InjectRepository(Task) private readonly task: Repository<Task>) {}

  async create(todoTask: CreateTaskDto) {
    const task = this.task.create(todoTask);
    return await this.task.save(task);
  }

  async findAll() {
    return await this.task.find();
  }

  async findOne(id: number) {
    return await this.task.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const todo = await this.task.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException();
    }
    await this.task.update(id, updateTaskDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const todo = await this.task.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException();
    }
    return await this.task.delete(id);
  }
}
