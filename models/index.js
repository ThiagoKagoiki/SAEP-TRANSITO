import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
import MotoristaModel from './Motorista.js'

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);

const db = {
    Sequelize,
    sequelize,
    Motorista: MotoristaModel(sequelize)
};

export default db;