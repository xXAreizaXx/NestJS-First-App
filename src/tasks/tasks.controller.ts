// NestJS
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";

// Service
import { TasksService } from "./tasks.service";

// Entity
// import { Task } from "./task.entity";

// DTO
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";

@Controller("tasks")
export class TasksController {
    // Constructor
    constructor(private tasksService: TasksService) {}

    // Get all tasks
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    // Get a task by id
    @Get(":id")
    getTaskById(@Param("id") id: string) {
        return this.tasksService.getTaskById(id);
    }

    // Create a task
    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    // Update a task
    @Put(":id")
    updateTask(@Param("id") id: string, @Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(id, task);
    }

    // Delete a task
    @Delete(":id")
    deleteTask(@Param("id") id: string) {
        return this.tasksService.deleteTask(id);
    }
}
