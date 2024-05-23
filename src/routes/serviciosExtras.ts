import { Router } from 'express';
import { ServicioExtra } from '../models/ServicioExtra';

const router = Router();
let serviciosExtras: ServicioExtra[] = [];

router.get('/', (req, res) => {
  res.json(serviciosExtras);
});

router.post('/', (req, res) => {
  const servicioExtra: ServicioExtra = req.body;
  servicioExtra.idServicio = serviciosExtras.length + 1;
  serviciosExtras.push(servicioExtra);
  res.status(201).json(servicioExtra);
});

export default router;