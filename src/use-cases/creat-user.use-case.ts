import { User } from "../entities/user";
import { IUserRepository } from "../repository/user-repository.interface copy";

export class CreatUserUseCase{
    constructor(private repo: IUserRepository){}

async execute({name, email, password}:{name: string, email: string, password: string}){
const user = new User (name, email, password);
await this.repo.save(user);
}

}