import { Request, RequestHandler, Response } from 'express';
import { createUser, deleteUser, readManyUsers, readUser, updateUser } from '../../services/user';

export const readOneUser = (): RequestHandler => async (req: Request, res: Response) => {
    const {
        params: { id }
      } = req;
    try {
        const userPayload = await readUser(id);
        if (userPayload) {
            res.json({ status: 'Success', results:  userPayload});
        } else {
            res.json({ status: 'Success', description: `No record for given id of ${id}` });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "Error", description: "There was an error during readUser" });
    }
};

export const updateOneUser = (): RequestHandler => async (req: Request, res: Response) => {
    const id = req.params.id;
    const user = req?.body?.user;
    try {
        const userPayload = await updateUser(id, user);
        if (userPayload) {
            res.json({ status: 'Success', results:  userPayload});
        } else {
            res.json({ status: 'Success', description: `No record for given id of ${id}` });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "Error", description: "There was an error during readUser" });
    }
};

export const createOneUser = (): RequestHandler => async (req: Request, res: Response) => {
    const user = req?.body?.user;
    try {
        const userPayload = await createUser(user);
        res.json({ status: 'Success', results:  userPayload});
    } catch (err) {
        console.error(err);
        res.json({ status: "Error", description: "There was an error during readUser" });
    }
};

export const readAllUsers = (): RequestHandler => async (req: Request, res: Response) => {
    try {
        const userPayload = await readManyUsers();
        if (userPayload) {
            res.json({ status: 'Success', results:  userPayload});
        } else {
            res.json({ status: 'Success', description: `No record found in Users table` });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "Error", description: "There was an error during readAllUsers" });
    }
};

export const deleteOneUser = (): RequestHandler => async (req: Request, res: Response) => {
    const {
        params: { id }
      } = req;
    try {
        const userPayload = await deleteUser(id);
        if (userPayload) {
            res.json({ status: 'Success', results:  'User has been removed' });
        } else {
            res.json({ status: 'Success', description: `No record for given id of ${id}` });
        }
    } catch (err) {
        console.error(err);
        res.json({ status: "Error", description: "There was an error during readUser" });
    }
};