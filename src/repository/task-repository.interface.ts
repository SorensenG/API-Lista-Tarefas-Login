import { Task } from "../entities/task";

export interface ITaskRepository{
    save(task : Task): Promise<void>;
    delete(taskId: number): Promise<void>
    getAll(userID:number): Promise<Task[]>
}