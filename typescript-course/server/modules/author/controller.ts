import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Author from './service';

class AuthorController {


    constructor() {}

     /* Definição dos métodos direcionados pelas rotas */
    getAll(req: Request, res: Response) {

        Author
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar todos os Authors'))
    };

    createAuthor(req: Request, res: Response) {

        Author
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao criar autor'))
    };

    getById(req: Request, res: Response) {

        const AuthorID = parseInt(req.params.id); //Transformando em number pois vem em string

        Author
            .getById(AuthorID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar um autor pelo ID'))
    };

    updateAuthor(req: Request, res: Response) {

        const AuthorID = parseInt(req.params.id);
        const props = (req.body);

        Author
            .update(AuthorID, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao atualizar autor'))
    };

    deleteAuthor(req: Request, res: Response) {

        const AuthorID = parseInt(req.params.id);

        Author
            .delete(AuthorID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao deletar autor'))
    };
}

export default new AuthorController();