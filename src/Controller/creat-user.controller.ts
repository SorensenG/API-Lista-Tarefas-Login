import { Request, Response } from "express";
import { CreatUserUseCase } from "../use-cases/creat-user.use-case";

export class CreatUserController{
    constructor(private usecase: CreatUserUseCase){}

    async handle (request: Request, response: Response){


        const data = request.body


        await this.usecase.execute(data)

            response.status(201).json({
                message : "usuario criado com sucesso"
            })
    }

    


}