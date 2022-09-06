import { RequestHandler } from 'express';

export const healthCheck: RequestHandler = (_, res) => {
    res.json({ status: 'Service is up and running' });
}
