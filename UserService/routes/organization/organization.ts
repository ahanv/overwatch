import { RequestHandler } from 'express';
import { readOrganization } from '../../services/organization';

export const organization: RequestHandler = (_, res) => {
    try {
        const org = readOrganization();
        res.json({ status: 'organization endpoint', results:  org});
    } catch (err) {
        res.json({ status: "Error" });
    }
}
