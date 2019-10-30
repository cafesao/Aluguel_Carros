const mongo = require('mongoose')

const CarroSchema = new mongo.Schema ({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: false,
        default: 'Sem Placa'
    },
    anoLançamento: {
        type: Number,
        required: true 
    },
    kmRodados: {
        type: String,
        required: true,
        default: 0
    },
    preco: {
        type: String,
        required: true
    },
    defeito: {
        type: String,
        required: false,
        default: 'Não tem defeitos'
    },
    registro: {
        type: Date,
        default: Date.now

    },
    tags: {
        type: Array,
        required: true
    }
}) 

mongo.model('Carro', CarroSchema)