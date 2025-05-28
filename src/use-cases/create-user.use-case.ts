import { PrismaClient, User } from '@prisma/client';
import { IUserRepository } from "../repository/user-repository.interface";
import bcrypt from "bcryptjs";

export class CreatUserUseCase {
    constructor(private repo: IUserRepository) {}

    async execute({ name, email, password }: { name: string; email: string; password: string }) {
        // ✅ Hashear a senha ANTES de salvar
        const hashedPassword = await bcrypt.hash(password, 8);

        await this.repo.save({ name, email, password: hashedPassword });
    }
}
