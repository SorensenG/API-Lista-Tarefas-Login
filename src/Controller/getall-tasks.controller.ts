import { Request, Response } from "express";
import { GetAllTaskUseCase } from "../use-cases/getall-task.use-case";

export class GetAllTasksController {
    constructor(private usecase: GetAllTaskUseCase) { }

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const userID = Number(id);

        const tasks = await this.usecase.execute(userID);

        response.status(200).json({
            message: "Tarefas listadas com sucesso",
            data: tasks

        })


    }

}