import * as express from 'express';
import { Application } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

class Api {
    public express: Application;

    constructor() {
        this.express = express();
    }

    middleware(): void {
        //Morgan gera um log para toda requisição efetuada
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded( { extended:true } ));
        this.express.use(bodyParser.json());
    }
}

//Exportando uma instancia da classe com a propriedade express
export default new Api().express; 