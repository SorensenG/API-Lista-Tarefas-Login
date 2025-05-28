import { Task } from '@prisma/client';

export interface ITaskRepository {
  save(task: { userId: number; title: string; description: string; status: string; createdAt: string }): Promise<Task>;
  getAll(userId: number): Promise<Task[]>;
  delete(taskId: number): Promise<Task>;
  update(taskId: number, data: { title?: string; description?: string; status?: string }): Promise<Task>;
}