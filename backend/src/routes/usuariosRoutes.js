import { Router } from 'express';
import { 
  registrarUsuario, 
  loginUsuario, 
  actualizarPassword, 
  verificarEmail 
} from '../controllers/usuariosController.js';

const router = Router();

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.put('/actualizar-password', actualizarPassword);
router.post('/verificar-email', verificarEmail);

export default router;