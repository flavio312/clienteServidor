import { Router } from 'express';
import { Pago } from '../models/Pago';

const router = Router();
let pagos: Pago[] = [];

router.get('/', (req, res) => {
  res.json(pagos);
});

router.post('/', (req, res) => {
  const pago: Pago = req.body;
  pago.idPago = pagos.length + 1;
  pagos.push(pago);
  res.status(201).json(pago);
});

export default router;
