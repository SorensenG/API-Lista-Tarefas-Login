import { TaskRepository } from "../repository/implementations/task.repository";
import { UptdateTaskUseCase } from "../use-cases/update-task.use-case";
import { UptdateTaskController } from "../Controller/update-task.controller";

export function MakeUpdateTaskController() {
    const taskRepository = new TaskRepository();
    const updateTaskUseCase = new UptdateTaskUseCase(taskRepository);
    const updateTaskController = new UptdateTaskController(updateTaskUseCase);
    return updateTaskController;
}