import { Router } from 'express';
import { createOneUser, readOneUser, updateOneUser } from './handlers';

export const initUserRoutes = (router: Router) => {
  router.get('/user/:id', readOneUser());
  router.put('/user/:id', updateOneUser());
  router.post('/user', createOneUser());
};
