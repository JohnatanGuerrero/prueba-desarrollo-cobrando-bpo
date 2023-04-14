import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Departamento } from './Departamento.js';

export const Empleado = sequelize.define('empleado', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nif: {
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellido1: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    apellido2: {
        type: DataTypes.STRING(100),
    },
},
    {
        timestamps: false,
    }
);

Empleado.belongsTo(Departamento, {
    foreignKey: 'codigo_departamento',
});

export default Empleado;
