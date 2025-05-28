import { User } from '@prisma/client';
export interface IUserRepository {
    save(user: { name: string; email: string; password: string }): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    getAll(): Promise<User[]>;

}