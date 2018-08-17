import { Request, Response } from 'express';
import * as HttpStatus from "http-status";

class UserController {

    constructor() {
        
    }

    /* Definição dos métodos direcionados pelas rotas */
    getAll(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };

    createUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };

    getById(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };

    updateUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };

    deleteUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'Ok'
        });
    };
}

export default UserController;