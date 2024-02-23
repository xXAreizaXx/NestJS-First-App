export enum TaskStatus {
    DONE = "DONE",
    IN_PROGRESS = "IN_PROGRESS",
    PENDING = "PENDING",
}

export class Task {
    description: string;
    id: string;
    status: TaskStatus;
    title: string;
}
