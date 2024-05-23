import { Router } from 'express';
import { Habitacion } from '../models/Habitacion';

const router = Router();
let habitaciones: Habitacion[] = [];

router.get('/', (req, res) => {
  res.json(habitaciones);
});

router.post('/', (req, res) => {
  const habitacion: Habitacion = req.body;
  habitacion.idHabitacion = habitaciones.length + 1;
  habitaciones.push(habitacion);
  res.status(201).json(habitacion);
});

export default router;