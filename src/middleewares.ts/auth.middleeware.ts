import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authConfig } from "../config/auth";

declare module "express-serve-static-core" {
    interface Request {
        userId?: number;
    }
}

interface TokenPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction
): void { 
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ error: "Token missing" });
        return;
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, authConfig.secret) as TokenPayload;

        req.userId = Number(decoded.sub);  // ✅ Converte para number

        next();
    } catch {
        res.status(401).json({ error: "Invalid token" });
    }
}
