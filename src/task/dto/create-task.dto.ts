import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsOptional()
    @IsEnum(TaskStatus)
    readonly status?: TaskStatus;
}
