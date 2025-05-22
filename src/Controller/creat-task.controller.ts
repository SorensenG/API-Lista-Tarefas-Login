import { Request, Response } from "express";
import { CreatTaskUseCase } from "../use-cases/creat-task.use-case";

export class CreatTaskController{
    constructor(private usecase: CreatTaskUseCase){}

    async handle (request: Request, response: Response){


        const data = request.body


        await this.usecase.execute(data)

            response.status(201).json({
                message : "Tarefa criada com sucesso"
            })
    }

    


}