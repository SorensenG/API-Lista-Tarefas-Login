import { Request, response, Response } from "express";
import { CreatTaskUseCase } from "../use-cases/create-task.use-case";

export class CreatTaskController {
    constructor(private usecase: CreatTaskUseCase) { }

    async handle(request: Request, response: Response) {

        try {

            const data = request.body


            await this.usecase.execute(data)

            response.status(201).json({
                message: "Tarefa criada com sucesso"
            })
        }
        catch (error) {
            response.status(400).json({
                message: "Erro ao criar tarefa",
                error: (error as Error).message
            });
        }
    }
}