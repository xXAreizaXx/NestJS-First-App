// NestJS
import { Module } from "@nestjs/common";

// Controller
import { TasksController } from "./tasks.controller";

// Service
import { TasksService } from "./tasks.service";

@Module({
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule {}
