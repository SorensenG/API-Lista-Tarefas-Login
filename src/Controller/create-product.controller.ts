import { Request, Response } from "express";
import { CreateProductUseCase } from "../use-cases/create-product.use-case";

export class CreateProductController {
    constructor(private usecase: CreateProductUseCase){}

    async handle(request: Request, response: Response){

        const data = request.body;
        
        await this.usecase.execute(data)

        response.status(200).json({
            message: "produto criado com sucesso"
        })
    }
}