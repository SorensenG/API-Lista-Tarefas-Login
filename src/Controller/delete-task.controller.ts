import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../use-cases/delete-task.use-case";

export class DeletTaskController{
    constructor(private usecase: DeleteTaskUseCase){}

    async handle (request: Request, response: Response){


        const data = request.body


        await this.usecase.execute(data)

            response.status(200).json({
                message : "Tarefa criada com sucesso"
            })
    }

    


}