import { ITaskRepository } from "../repository/task-repository.interface";

export class UptdateTaskUseCase {

  constructor(private repo: ITaskRepository) {}

  async execute(
    { title, description, status }: 
    { title?: string; description?: string; status?: string }, 
    taskID: number
  ) {
    await this.repo.update(taskID, {
      title,
      description,
      status
    });
  }
}
