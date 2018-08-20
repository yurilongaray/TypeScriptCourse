import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import Handlers from './response/handlers';
import Auth from '../auth';

//Classe responsável por chamar o express, middlewares e rotas, classe Princiapal
class Api {
    
    public express: Application;

    constructor() {
        this.express = express();
        this.middleware();
    }

    middleware(): void {
        //Morgan gera um log para toda requisição efetuada
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded( { extended:true } ));
        this.express.use(bodyParser.json());
        this.express.use(Handlers.errorHandlerApi);
        this.express.use(Auth.config().initialize());
        this.router(this.express, Auth);
    }

    private router(app: Application, auth: any): void {
        Routes.initRoutes(app, auth);
    }
}

//Exportando uma instancia da clo é válidose com a propriedade express
export default new Api().express;