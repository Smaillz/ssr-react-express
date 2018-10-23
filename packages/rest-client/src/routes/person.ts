import { NextFunction, Request, Response, Router } from 'express';

const router: Router = Router();

const getUsers = (req: Request, resp: Response, next: NextFunction) => {
    resp.send({
        id: 'temp',
        message: 'Test router'
    });
};

router.route('/test')
    .get(getUsers);

export default router;