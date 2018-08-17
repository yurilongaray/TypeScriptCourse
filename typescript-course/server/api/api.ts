import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi'
import AuthConfig from '../auth';

//Classe responsável por chamar o express, middlewares e rotas, classe Princiapal
class Api {
    public express: Application;
    public auth;

    constructor() {
        this.express = express();
        this.auth = AuthConfig();
        this.middleware();
    }

    middleware(): void {
        //Morgan gera um log para toda requisição efetuada
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded( { extended:true } ));
        this.express.use(bodyParser.json());
        this.express.use(errorHandlerApi);
        this.express.use(this.auth.initialize());
        this.router(this.express, this.auth);
    }

    private router(app: Application, auth: any): void {
        new Routes(app, auth);
    }
}

//Exportando uma instancia da clo é válidose com a propriedade express
export default new Api().express;