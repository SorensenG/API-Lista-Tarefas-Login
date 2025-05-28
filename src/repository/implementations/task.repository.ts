import { PrismaClient, Task } from '@prisma/client';
import { ITaskRepository } from '../task-repository.interface';

const prisma = new PrismaClient();

export class TaskRepository implements ITaskRepository {
  async save(task: { userId: number; title: string; description: string; status: string; createdAt: string }): Promise<Task> {
    return await prisma.task.create({
      data: {
        userid: task.userId,
        title: task.title,
        description: task.description,
        status: task.status,
        createdAt: new Date(task.createdAt)
      }
    });
  }

  async getAll(userId: number): Promise<Task[]> {
    return await prisma.task.findMany({
      where: { userid: userId }
    });
  }

  async delete(taskId: number): Promise<Task> {
    return await prisma.task.delete({
      where: { id: taskId }
    });
  }

  async update(taskId: number, data: { title?: string; description?: string; status?: string }): Promise<Task> {
    return await prisma.task.update({
      where: { id: taskId },
      data
    });
  }
}
