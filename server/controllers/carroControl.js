const mongo = require('mongoose')
const Carro = mongo.model('Carro')

module.exports = {
    async coletarTudo (req,res) {
        const carros = await Carro.find()
        return res.json(carros)
    },

    async coletar (req,res) {
        const nomeCarro = req.params.modelo.toUpperCase()
        const carro = await  Carro.find({"tags": { $all: nomeCarro }})
        return res.json(carro)
    },

    async adicionar (req,res) {
        const carro = await Carro.create(req.body)
        return res.send('Adicionado com Sucesso!')
    },

    async deletar (req,res) {
        await Carro.findByIdAndRemove(req.params.id)
        return res.send('Removido com Sucesso!')
    }
}