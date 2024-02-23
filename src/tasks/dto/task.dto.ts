// Entity
import { TaskStatus } from "../task.entity";

// Validation
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    description: string;

    @IsString()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status: TaskStatus;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title: string;
}

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    title?: string;
}
