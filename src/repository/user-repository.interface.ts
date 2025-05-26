import { User } from "../entities/user";

export interface IUserRepository {
    save(user : User): Promise<void>;
    delet(userId : number): Promise<void>
     getAll(): Promise<User[]>;

}