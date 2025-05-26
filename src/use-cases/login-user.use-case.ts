import bcrypt from "bcryptjs";      
import { IUserRepository } from "../repository/user-repository.interface";
import { Jwt } from "jsonwebtoken";

export class LoginUserUseCase {
    constructor(private repo: IUserRepository) {}

    async execute({email , password} : {email: string, password: string}) {
        //verificar o email
        const users = await this.repo.getAll();
        const loginUser = users.find(u => u.getEmail() === email);  

        if(!loginUser) {
            throw new Error("User not found");

            // verificar a senha
            const passwordMatch = await bcrypt.compare(password, loginUser.getPassword() );

}                            