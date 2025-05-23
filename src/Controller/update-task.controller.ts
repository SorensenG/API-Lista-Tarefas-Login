import { Request, Response } from "express";
import { UptdateTaskUseCase } from "../use-cases/update-task.use-case";

export class UptdateTaskController {
    constructor(private usecase: UptdateTaskUseCase) { }

    async handle(request: Request, response: Response) {

        const { id } = request.params; //pega o id da tsk pela URL
        const taskId = Number(id);

        const { userId, title, description, status, createdAt } = request.body; // a requisiçao vai enviar um json com os dados da task nova 


        await this.usecase.excute({ userId, title, description, status, createdAt },
            taskId);

        response.status(200).json({
            message: "Tarefa atualizada com sucesso"
        })

    }
}
