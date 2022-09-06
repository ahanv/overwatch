import { Router } from 'express';
import healthCheck from './healthCheck';
import organization from './organization';
import user from './user';

const router = Router();

export const test = () => {
    router.get('/healthCheck', healthCheck);
    router.get('/organization', organization);
    router.get('/user', user);
}

test();

export default router;
