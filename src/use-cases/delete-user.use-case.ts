import { IUserRepository } from "../repository/user-repository.interface copy";

export class DeleteUserUseCase{
    constructor(private repo: IUserRepository){}


    async execute(userID:number){
        await this.repo.delet(userID);
    }
}