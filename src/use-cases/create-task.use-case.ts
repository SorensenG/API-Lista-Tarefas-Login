import { PrismaClient, Task } from '@prisma/client';
import { ITaskRepository } from "../repository/task-repository.interface";

export class CreatTaskUseCase{

    constructor(private repo : ITaskRepository){}

    async execute({userId, title,description,status,createdAt}:{userId: number, title: string,description: string,status: string,createdAt: string}){
        await this.repo.save({ userId, title, description, status, createdAt });


    }


}