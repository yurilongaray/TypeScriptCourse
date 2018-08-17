import { Response } from 'express';
import * as HttpStatus from 'http-status';

export function dbErrorHandler(res: Response, err: any) {
    console.log(`Error: ${err}`);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar no bd'
    })
}