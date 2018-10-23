import * as express from 'express';
import * as bodyParser from 'body-parser';
import servConf from './server.config';

import usersRouter from './routes/users.route';
import testRouter from './routes/person';

class Server {
    public app: express.Application;
    private restApiVersion: string = `/api/rest/${servConf.api_version}`;

    constructor() {
        this.app = express();

        this.setConfigMiddleware();
    }

    private setConfigMiddleware(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // routes
        this.app.use(this.restApiVersion,usersRouter);
        this.app.use(this.restApiVersion, testRouter);

        this.app.use((err: Error, req: any, resp: any, next: express.NextFunction): void => {
            resp.send({ error: err.message });
        });
    }
}

export default new Server();