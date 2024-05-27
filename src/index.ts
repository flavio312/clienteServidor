import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database';
import clientesRouter from './routes/clientes';
import reservasRouter from './routes/reservas';
import habitacionesRouter from './routes/habitaciones';
import pagosRouter from './routes/pagos';
import serviciosExtrasRouter from './routes/serviciosExtras';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Usa cors como middleware

app.use('/clientes', clientesRouter);
app.use('/reservas', reservasRouter);
app.use('/habitaciones', habitacionesRouter);
app.use('/pagos', pagosRouter);
app.use('/servicios-extras', serviciosExtrasRouter);

const server = app.listen(port, async () => {
  console.log(`API escuchando en http://localhost:${port}`);
  
  // Conectar a la base de datos y sincronizar modelos
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    await sequelize.sync();
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});

// Configurar WebSocket
import { Server } from 'ws';
const wss = new Server({ server });

wss.on('connection', ws => {
  console.log('Nuevo cliente conectado');
  ws.on('message', message => {
    console.log('Mensaje recibido:', message);
  });
  ws.send('Bienvenido al servidor WebSocket');
});

export default app;
