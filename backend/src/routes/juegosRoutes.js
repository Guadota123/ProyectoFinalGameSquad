import { Router } from 'express';
import { obtenerJuegos, crearJuego } from '../controllers/juegosController.js';

const router = Router();

router.get('/', obtenerJuegos);
router.post('/', crearJuego);

export default router;