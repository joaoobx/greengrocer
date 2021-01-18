import express from 'express';
import routes from './routes';

import './database';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor aberto na porta: ${port}`);
});
