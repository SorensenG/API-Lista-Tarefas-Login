import { Request, Response } from "express";
import { UptdateTaskUseCase } from "../use-cases/update-task.use-case";

export class UptdateTaskController {
    constructor(private usecase: UptdateTaskUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;  // pega o id da task pela URL
        const taskId = Number(id);

        const { title, description, status, createdAt } = request.body;

        await this.usecase.execute(
            { title, description, status },
            taskId
        );

        response.status(200).json({
            message: "Tarefa atualizada com sucesso"
        });
    }
}
