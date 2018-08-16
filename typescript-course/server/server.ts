import * as http from 'http';

//Integrando todo o servidor
import Api from './api/api';

const models = require('./models'); //Retorna o index

const config = require('./config/env/config')(); //Chama a funcao e executa ao mesmo tempo (imediata)

const server = http.createServer(Api);

//Antes do server ser executado, será executado o index  
models.sequelize.sync().then(() => {

    server.listen(config.serverPort);
    
    //Capturando eventos:
    server.on('listening', () => {
        console.log('Servidor port: ' + config.serverPort)
    });
    
    server.on('error', (err: NodeJS.ErrnoException) => {
        console.log(`Error: ${err}`);
    });

});