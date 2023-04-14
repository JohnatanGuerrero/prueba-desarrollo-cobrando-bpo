import { Departamento } from '../models/Departamento.js';

/**
 * Obtiene todos los departamentos
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y los departamentos
 */

const getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.status(200).json({
            msg: 'Departamentos obtenidos',
            departamentos
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

/**
 * Crea un departamento en la base de datos
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y el departamento creado
 */

const createDepartamento = async (req, res) => {
    try {
        const { nombre, presupuesto } = req.body;
        if (!nombre || !presupuesto) {
            return res.status(400).json({
                msg: 'El nombre y el presupuesto son obligatorios'
            });
        }
        const departamentoCreado = await Departamento.create({
            nombre,
            presupuesto
        });
        res.status(201).json({
            msg: 'Departamento creado',
            departamento: departamentoCreado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

export { createDepartamento , getDepartamentos }
