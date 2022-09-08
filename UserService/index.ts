import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const port = 3005;
const app = express();

app.use(bodyParser.json());

app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Overwatch is listening on port ${port}` )
})