import { RequestHandler } from 'express';
import { readUser } from '../../services/user';

export const user: RequestHandler = async (_, res) => {
    try {
        const userPayload = await readUser();
        res.json({ status: 'Success: User endpoint', results:  userPayload});
    } catch (err) {
        console.error(err);
        res.json({ status: "Error: User endpoint", description: "There was an error during readUser" });
    }
}
