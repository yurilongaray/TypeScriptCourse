import { Request, Response } from 'express';
import * as HttpStatus from "http-status";
import * as _ from 'lodash';
import User from './service';
import { onError } from '../../api/response/errorHandler';
import { onSuccess } from '../../api/response/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';


class UserController {

    private UserService: User;

    constructor() {
        this.UserService = new User;       
    }

    /* Definição dos métodos direcionados pelas rotas */
    getAll(req: Request, res: Response) {

        this.UserService
            .getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os users'))
    };

    createUser(req: Request, res: Response) {

        this.UserService
            .create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao criar usuario'))
    };

    getById(req: Request, res: Response) {

        const userID = parseInt(req.params.id); //Transformando em number pois vem em string

        this.UserService
            .getById(userID)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar um usuario pelo ID'))
    };

    updateUser(req: Request, res: Response) {

        const userID = parseInt(req.params.id);
        const props = (req.body);

        this.UserService
            .update(userID, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao atualizar usuario'))
    };

    deleteUser(req: Request, res: Response) {

        const userID = parseInt(req.params.id);

        this.UserService
            .delete(userID)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao deletar usuario'))
    };
}

export default UserController;