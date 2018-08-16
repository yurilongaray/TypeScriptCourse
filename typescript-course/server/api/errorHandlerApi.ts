import { Request, Response, RequestHandler, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    console.log(`API error handler was executed: ${err}`);
    res.status(500).json({
        errorCode: 'ERR-01',
        message: 'Internal server error'
    })
}
