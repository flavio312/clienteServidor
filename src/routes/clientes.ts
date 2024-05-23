import { Router } from 'express';
import { Cliente } from '../models/Cliente';

const router = Router();
let clientes: Cliente[] = [];

router.get('/', (req, res) => {
  res.json(clientes);
});

router.post('/', (req, res) => {
  const cliente: Cliente = req.body;
  cliente.idCliente = clientes.length + 1;
  clientes.push(cliente);
  res.status(201).json(cliente);
});

export default router;
