import express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'ws';
import clientesRouter from './routes/clientes';
import reservasRouter from './routes/reservas';
import habitacionesRouter from './routes/habitaciones';
import pagosRouter from './routes/pagos';
import serviciosExtrasRouter from './routes/serviciosExtras';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/clientes', clientesRouter);
app.use('/reservas', reservasRouter);
app.use('/habitaciones', habitacionesRouter);
app.use('/pagos', pagosRouter);
app.use('/servicios-extras', serviciosExtrasRouter);

const server = app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});

const wss = new Server({ server });

wss.on('connection', ws => {
  console.log('Nuevo cliente conectado');
  ws.on('message', message => {
    console.log('Mensaje recibido:', message);
  });
  ws.send('Bienvenido al servidor WebSocket');
});

export default app;
