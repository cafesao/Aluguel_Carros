import axios from 'axios'
export { PrepararTags }
const carro = {}

async function Adicionar(modelo, marca, placa, ano, kmRodados, preco, defeito) {
    try{
        if(placa.length > 0) {
            carro.placa = placa
        }
        if(kmRodados.length > 0) {
            carro.kmRodados = kmRodados
            
        }
        if(defeito.length > 0) {
            carro.defeito = defeito
        }

        carro.modelo = modelo
        carro.marca = marca
        carro.anoLançamento = Number(ano)
        carro.preco = preco
        
        await axios.post('http://localhost:3001/api/carros', carro)
       
        alert('Seu carro foi adicionado!')
    }
    catch(err) {
        console.warn(err)
    }
}

function PrepararTags(modelo, marca, placa, ano, kmRodados, preco, defeito) {
    if(placa.length === 0) {
        carro.tags = [modelo.toUpperCase(), marca.toUpperCase()]
    }
    else {
        carro.tags = [modelo.toUpperCase(), marca.toUpperCase(), placa.toUpperCase()]
    }
    Adicionar(modelo, marca, placa, ano, kmRodados, preco, defeito)
}
