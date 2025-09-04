import express from 'express'
import dotenv from 'dotenv'
import db from './models/index.js'
import { registrarMotorista } from './controller/MotoristaController.js'

dotenv.config()
const app = express()

app.use(express.json())

app.post('/registrarMotorista', registrarMotorista)

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => console.log(`Servidor da clínica rodando na porta ${process.env.PORT}`));
});