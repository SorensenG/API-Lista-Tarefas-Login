import { Router } from "express";
import { MakeCreatTaskController } from "../factories/make-create-task.controller";
import { MakeDeletTaskController } from "../factories/make-delete-task.controller";
import { MakeGetAllTasksController } from "../factories/make-getall-task.controller";
import { MakeUpdateTaskController } from "../factories/make-update-task.controller";
import { ensureAuthenticated } from "../middleewares.ts/auth.middleeware";

const taskRoutes = Router();

// Criar task → protegido
taskRoutes.post("/", ensureAuthenticated, (req, res) => {
    MakeCreatTaskController().handle(req, res);
});

// Listar todas as tasks do usuário → protegido
taskRoutes.get("/", ensureAuthenticated, (req, res) => {
    MakeGetAllTasksController().handle(req, res);
});

// Atualizar task → protegido
taskRoutes.put("/:id", ensureAuthenticated, (req, res) => {
    MakeUpdateTaskController().handle(req, res);
});

// Deletar task → protegido
taskRoutes.delete("/:id", ensureAuthenticated, (req, res) => {
    MakeDeletTaskController().handle(req, res);
});

export { taskRoutes };