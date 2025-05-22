import { Request, Response } from "express";
import { DeleteUserUseCase } from "../use-cases/delete-user.use-case";

export class DeleteUserController {
    constructor(private usecase: DeleteUserUseCase) { }

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const userID = Number(id);

        await this.usecase.execute(userID);

        response.status(200).json({
            message: "Usuario deletada com sucesso"
        })


    }

}