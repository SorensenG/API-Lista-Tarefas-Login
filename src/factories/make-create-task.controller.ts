import { TaskRepository } from "../repository/implementations/task.repository";
import { CreatTaskUseCase } from "../use-cases/create-task.use-case";
import { CreatTaskController } from "../Controller/create-task.controller";

export function MakeCreatTaskController() {
    const taskRepository = new TaskRepository();
    const creatTaskUseCase = new CreatTaskUseCase(taskRepository);
    const creatTaskController = new CreatTaskController(creatTaskUseCase);
    return creatTaskController;

}