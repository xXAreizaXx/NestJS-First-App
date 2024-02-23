// NestJS
import { Injectable } from "@nestjs/common";

// Entity
import { Task, TaskStatus } from "./task.entity";

// External Dependencies
import { v4 as uuid } from "uuid";

// DTO
import { CreateTaskDto, UpdateTaskDto } from "./dto/task.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            description: "This is the description of the first task",
            id: uuid(),
            status: TaskStatus?.PENDING,
            title: "First task",
        },
    ];

    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id);
    }

    createTask(task: CreateTaskDto) {
        const newTask: Task = {
            ...task,
            id: uuid(),
        };

        this.tasks.push(newTask);

        return newTask;
    }

    updateTask(id: string, updatedTask: UpdateTaskDto): Task {
        const task = this.getTaskById(id);

        const newTask = Object.assign(task, updatedTask);

        this.tasks = this.tasks.map((task) =>
            task.id === id ? newTask : task
        );

        return newTask;
    }

    deleteTask(id: string): Task[] {
        this.tasks = this.tasks.filter((task) => task.id !== id);

        return this.tasks;
    }
}
