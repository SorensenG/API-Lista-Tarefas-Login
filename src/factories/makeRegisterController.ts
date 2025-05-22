import { Database } from "../repository/implementations/in-memory-database"; 
import { UserRepository } from "../repository/implementations/user.repository"
import { CreatUserUseCase } from "../use-cases/creat-user.use-case"; 
import { CreatUserController } from "../Controller/creat-user.controller"; 

export function makeRegisterController() {
    // ✅ 1. Obtém instância única do banco
    const db = Database.getInstance();

    // ✅ 2. Cria o repositório de usuário
    const userRepository = new UserRepository(db);

    // ✅ 3. Cria o caso de uso
    const registerUseCase = new CreatUserUseCase(userRepository);

    // ✅ 4. Cria o controlador
    const registerController = new CreatUserController(registerUseCase);

    // ✅ 5. Retorna o controller montado
    return registerController;
}
