import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description?: string;

    @IsOptional()
    @IsString()
    readonly status?: string;
}
