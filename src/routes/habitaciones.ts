import { Router } from 'express';
import { Op } from 'sequelize';
import Habitacion from '../models/Habitacion';

const router = Router();

let lastCheckedTime: Date = new Date();

router.get('/', async (req, res) => {
  const habitaciones = await Habitacion.findAll();
  res.json(habitaciones);
});

// Short polling para nuevas habitaciones
router.get('/nuevas-habitaciones', async (req, res) => {
  const habitaciones = await Habitacion.findAll({
    where: {
      createdAt: {
        [Op.gt]: lastCheckedTime, // Utilizar el operador Op.gt para mayor que
      },
    },
  });
  lastCheckedTime = new Date();
  res.json(habitaciones);
});

router.post('/', async (req, res) => {
  const habitacion = await Habitacion.create(req.body);
  res.status(201).json(habitacion);
});

export default router;
