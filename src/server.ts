import express from 'express';

const app = express();

const port = 3333;

app.get('/', (request, response) => {
    response.json({ message: 'GREENGROCER' });
});

app.listen(port, () => {
    console.log(`Greengrocer server has started on port: ${port}`);
});

// Descobrir como trabalhar com express JSON
// Dar uma olhada em o que é CORS
// Testando bloqueio 1
