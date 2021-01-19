import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    return res.json({
        data: 'Hello World!!',
    });
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor aberto na porta: http://localhost:${port}`);
});
