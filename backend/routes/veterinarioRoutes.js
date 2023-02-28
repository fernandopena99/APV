import express, { Router } from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword
} from '../controllers/veterinarioControllers.js';
import checkAuth from "../middleware/authMiddleware.js";

//Area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
//Para recuperar el password
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); //Lo mismo, pero en 1 linea
// router.get('/olvide-password/:token', comprobarToken); 
// router.post('/olvide-password/:token', nuevoPassword);


//Area privada
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router