import server from "./server";
import { Request, Response, NextFunction } from 'express';
import servConf from './server.config';

server.app.listen(servConf.port, () => console.log('Express server listening on port ' + servConf.port));

const notFoundHandler = (req: Request, resp: Response, next: NextFunction) => {
    console.log('Not found endpoint', req.path);

    resp.status(404).send({
        successed: false,
        error: 'Not found'
    });
}

server.app.all('*', notFoundHandler);
