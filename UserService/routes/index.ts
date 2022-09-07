import { Router } from 'express';
import healthCheck from './healthCheck';
import { initUserRoutes } from './user';

const router = Router();

router.get('/healthCheck', healthCheck);
initUserRoutes(router);


export default router;
