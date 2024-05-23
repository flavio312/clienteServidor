import { Router } from 'express';
import { Reserva } from '../models/Reserva';

const router = Router();
let reservas: Reserva[] = [];

// Short Polling: simplemente consulta normal
router.get('/', (req, res) => {
  res.json(reservas);
});

// Long Polling
router.get('/long-polling', (req, res) => {
  const checkForUpdates = () => {
    if (reservas.length > 0) {
      res.json(reservas);
    } else {
      setTimeout(checkForUpdates, 1000); // Verifica cada segundo
    }
  };

  checkForUpdates();
});

router.post('/', (req, res) => {
  const reserva: Reserva = req.body;
  reserva.idReserva = reservas.length + 1;
  reservas.push(reserva);
  res.status(201).json(reserva);
});

export default router;
