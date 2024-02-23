// NestJS
import { Module } from "@nestjs/common";

// Modules
import { TasksModule } from "./tasks/tasks.module";

@Module({
    controllers: [],
    imports: [TasksModule],
    providers: [],
})
export class AppModule {}
