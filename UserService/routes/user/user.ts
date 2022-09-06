import { RequestHandler } from 'express';
import { readUser } from '../../services/user';

export const user: RequestHandler = async (_, res) => {
    console.log('****TEST 1****');
    try {
        console.log('****TEST 2****');
        const userPayload = await readUser();
        console.log('****TEST 7****');
        res.json({ status: 'Success: User endpoint', results:  userPayload});
    } catch (err) {
        console.error(err);
        res.json({ status: "Error: User endpoint", description: "There was an error during readUser" });
    }
}
