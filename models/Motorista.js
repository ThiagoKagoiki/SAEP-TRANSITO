import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Motorista = sequelize.define('Motorista', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        placa: {
            type: DataTypes.STRING,
            unique: true
        },
        carro: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM('estacionado', 'livre'),
            defaultValue: "livre"
        }
    });

    return Motorista;
};