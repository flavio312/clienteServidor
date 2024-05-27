import { Router, Request, Response } from 'express';
import Cliente from '../models/Cliente';

const router = Router();
let responses: Response[] = [];

// Obtener todos los clientes
router.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

// Long polling para nuevos clientes
router.get('/nuevo-cliente', (req, res) => {
  responses.push(res);
});

// Crear un nuevo cliente
router.post('/', async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.status(201).json(cliente);
  
  // Notificar a todos los clientes en espera
  notifyNewCliente(cliente);
});

function notifyNewCliente(cliente: Cliente) {
  for (let res of responses) {
    res.json({
      success: true,
      cliente
    });
  }
  responses = [];
}

export default router;
