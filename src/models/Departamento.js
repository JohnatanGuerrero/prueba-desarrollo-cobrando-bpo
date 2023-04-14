import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Departamento = sequelize.define('departamentos', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
},
    {
        timestamps: false,
    }
);




