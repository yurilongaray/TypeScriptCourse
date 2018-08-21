import { Request, Response } from 'express';
import  PostController from './controller';


class PostRoutes {
    
    constructor() {}

    index(req: Request, res: Response) {
        //Chamada para o controller
        return PostController.getAll(req, res);
    }

    create(req: Request, res: Response) {
        return PostController.createPost(req, res);
    }

    findOne(req: Request, res: Response) {
        return PostController.getById(req, res);
    }

    update(req: Request, res: Response) {
        return PostController.updatePost(req, res);
    }

    destroy(req: Request, res: Response) {
        return PostController.deletePost(req, res);
    }
}

export default new PostRoutes();