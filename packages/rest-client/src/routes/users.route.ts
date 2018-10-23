import { NextFunction, Request, Response, Router } from 'express';
import { userList } from '../entity/user';

const router: Router = Router();

const getUsers = (req: Request, resp: Response, next: NextFunction) => {
    resp.send(userList);
};

router.route('/users')
    .get(getUsers);

export default router;