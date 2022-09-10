import { Router } from 'express';
import { createOneUser, deleteOneUser, readAllUsers, readOneUser, updateOneUser } from './handlers';

export const initUserRoutes = (router: Router) => {
  router.delete('/user/:id', deleteOneUser());
  router.get('/user/:id', readOneUser());
  router.get('/user', readAllUsers());
  router.put('/user/:id', updateOneUser());
  router.post('/user', createOneUser());
};
