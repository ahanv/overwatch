import express from 'express';
import routes from './routes';

const port = 3005;
const app = express();

/* app.get('/', (req, res) => {
    res.send('Overwatch is running!');
}) */

app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Overwatch is listening on port ${port}` )
})