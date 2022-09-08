import { Router } from 'express';
import { readOneUser, updateOneUser } from './handlers';

export const initUserRoutes = (router: Router) => {
  router.get('/user/:id', readOneUser());
  router.put('/user/:id', updateOneUser());
};
