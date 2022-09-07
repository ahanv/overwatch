import { Router } from 'express';
import { readOneUser } from './handlers';

export const initUserRoutes = (router: Router) => {
  router.get('/user/:id', readOneUser());
};
