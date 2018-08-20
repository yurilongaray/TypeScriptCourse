import { Request, Response } from 'express';
import * as HttpStatus from "http-status";
import * as _ from 'lodash';
import User from './service';
import Handlers from '../../api/response/handlers';

class UserController {


    constructor() {}

    /* Definição dos métodos direcionados pelas rotas */
    getAll(req: Request, res: Response) {

        User
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar todos os users'))
    };

    createUser(req: Request, res: Response) {

        User
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao criar usuario'))
    };

    getById(req: Request, res: Response) {

        const userID = parseInt(req.params.id); //Transformando em number pois vem em string

        User
            .getById(userID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar um usuario pelo ID'))
    };

    updateUser(req: Request, res: Response) {

        const userID = parseInt(req.params.id);
        const props = (req.body);

        User
            .update(userID, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao atualizar usuario'))
    };

    deleteUser(req: Request, res: Response) {

        const userID = parseInt(req.params.id);

        User
            .delete(userID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao deletar usuario'))
    };
}

export default new UserController();