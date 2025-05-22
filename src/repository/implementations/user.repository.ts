import { User } from "../../entities/user";
import { IUserRepository } from "../user-repository.interface copy";
import { Database } from "./in-memory-database";


export class UserRepository implements IUserRepository {

    private db: Database;

     constructor(dbInstance: Database) {
        this.db = dbInstance;
    }
    async delet(userId: number): Promise<void> {
        this.db.deleteUser(userId);
    }

    async save(user: User): Promise<void> {
        console.log("vou salvar o usuario")
        this.db.createUser(user)
    }


}