import { PrismaClient, User } from '@prisma/client';
import { IUserRepository } from '../user-repository.interface';

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  async save(user: { name: string; email: string; password: string }): Promise<User> {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email }
    });
  }

  async getAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}
