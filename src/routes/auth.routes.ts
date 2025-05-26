import { Router } from "express";
import { MakeCreatLoginController } from "../factories/make-login-user.controller";
import { MakeCreatUserController } from "../factories/make-create-user.controller";

const authRoutes = Router();

//castro de user 

authRoutes.post("/register", (req,res)=>{
    MakeCreatUserController().handle(req,res);
});

//login de user 
authRoutes.post("/login", (req,res)=>{
    MakeCreatLoginController().handle(req,res);
});

export {authRoutes};

