import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes';
import { errorHandlerApi } from './errorHandlerApi'

//Classe responsável por chamar o express, middlewares e rotas
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
        this.express.use(errorHandlerApi);
        this.router(this.express);
    }

    private router(app: Application): void {
        new Routes(app);
    }
}

//Exportando uma instancia da classe com a propriedade express
export default new Api().express; 