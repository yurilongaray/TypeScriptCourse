import { Request, Response } from 'express';
import * as _ from 'lodash';
import Handlers from '../../api/responses/handlers';
import Post from './service';

class PostController {


    constructor() {}

     /* Definição dos métodos direcionados pelas rotas */
    getAll(req: Request, res: Response) {

        Post
            .getAll()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar todos os Posts'))
    };

    createPost(req: Request, res: Response) {

        Post
            .create(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao criar post'))
    };

    getById(req: Request, res: Response) {

        const PostID = parseInt(req.params.id); //Transformando em number pois vem em string

        Post
            .getById(PostID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar um post pelo ID'))
    };

    updatePost(req: Request, res: Response) {

        const PostID = parseInt(req.params.id);
        const props = (req.body);

        Post
            .update(PostID, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao atualizar post'))
    };

    deletePost(req: Request, res: Response) {

        const PostID = parseInt(req.params.id);

        Post
            .delete(PostID)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao deletar o post'))
    };
}

export default new PostController();