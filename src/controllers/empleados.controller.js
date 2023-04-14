
import { Empleado } from '../models/Empleado.js';

/**
 * Devuelve todos los empleados
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y los empleados
 * @returns {json} Mensaje de error si no hay empleados
 */

const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.status(200).json({
            msg: 'Empleados obtenidos',
            empleados
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

/**
 * Devuelve un empleado
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y el empleado
 * @returns {json} Mensaje de error si no existe el empleado
*/

const getEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
        res.status(200).json({
            msg: 'Empleado obtenido',
            empleado
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

/**
 * Crea un empleado
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y el empleado creado
 * @returns {json} Mensaje de error si no se envían todos los campos
 */

const createEmpleado = async (req, res) => {
    try {
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
        if (!nif || !nombre || !apellido1 || !codigo_departamento) {
            return res.status(400).json({
                msg: 'Todos los campos son obligatorios'
            });
        }
        const empleadoCreado = await Empleado.create({
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        });
        res.status(201).json({
            msg: 'Empleado creado',
            empleado: empleadoCreado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

/**
 * Actualiza un empleado
 * @param {*} req Request
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación y el empleado actualizado
 * @returns {json} Mensaje de error si no existe el empleado
 */

const updateEmpleado = async (req, res) => {
    try{
        const { id } = req.params;
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
        await Empleado.update({
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        }, {
            where: {
                codigo : id
            }
        });
        const empleadoActualizado = await Empleado.findByPk(id);
        res.status(200).json({
            msg: 'Empleado actualizado',
            empleado: empleadoActualizado
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

/**
 * Elimina un empleado
 * @param {*} req Request 
 * @param {*} res Response
 * @returns {json} Mensaje de confirmación 
 * @returns {json} Mensaje de error si no existe el empleado
 */

const deleteEmpleado = async (req, res) => {
 try{
        const { id } = req.params;
        const empleado = await Empleado.findByPk(id);
        if (!empleado) {
            return res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
        await Empleado.destroy({
            where: {
                codigo: id
            }
        });
        res.status(200).json({
            msg: 'Empleado eliminado'
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error inesperado'
        });
    }
}

export { getEmpleados, getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado };
