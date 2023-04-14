import { Sequelize } from 'sequelize';

/**
 * Crea una instancia de Sequelize para conectarse a la base de datos
 * @param {string} database Nombre de la base de datos
 * @param {string} username Nombre de usuario de la base de datos
 * @param {string} password Contraseña de la base de datos
 * @param {object} options Opciones de configuración de la base de datos (host, dialect) 
 */

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);