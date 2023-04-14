import { Router } from "express";
const router = Router();
import {
    getDepartamentos,
    createDepartamento
} from '../controllers/departamentos.controller.js';

router
    .get('/departamentos', getDepartamentos)
    .post('/departamentos', createDepartamento);

export default router;


