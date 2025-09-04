import db from '../models/index.js'
import 'dotenv/config'

export const registrarMotorista = async(req, res) => {
    try{
        const {nome, placa, carro} = req.body

        const novoMotorista = await db.Motorista.create({nome, placa, carro})

        res.status(201).json({
            mensagem: `Motorista cadastrado!`,
            motorista: novoMotorista
        })
    }catch(err){
        res.status(400).json({
            mensagem: `Erro ao cadastrar Motorista`,
            detalhes: err.message
        })
    }
}