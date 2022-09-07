import { Request, RequestHandler, Response } from 'express';
import { readUser } from '../../services/user';

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
}
