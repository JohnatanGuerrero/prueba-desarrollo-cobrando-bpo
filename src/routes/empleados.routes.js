import { Router } from "express";
const router = Router();
import {
    getEmpleados,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
    getEmpleado
} from '../controllers/empleados.controller.js';

router
    .get('/empleados', getEmpleados)
    .post('/empleados', createEmpleado)
    .get('/empleados/:id', getEmpleado)
    .put('/empleados/:id', updateEmpleado)
    .delete('/empleados/:id', deleteEmpleado)

export default router;
