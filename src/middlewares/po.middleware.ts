import { Request, Response, NextFunction } from "express";

function poMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("Access to Purchase Order");
    next();
}

export default poMiddleware;