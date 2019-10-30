import axios from 'axios'
export { PrepararTags }
const carro = {}

async function Adicionar(modeloInput, marcaInput, placaInput, anoInput, kmInput, precoInput, defeitosInput) {
    try{
        if(placaInput.length > 0) {
            carro.placa = placaInput
        }
        if(kmInput.length > 0) {
            carro.kmRodados = kmInput
        }
        if(defeitosInput.length > 0) {
            carro.defeito = defeitosInput
        }

        carro.modelo = modeloInput
        carro.marca = marcaInput
        carro.anoLançamento = Number(anoInput)
        carro.preco = precoInput
        
        console.log(carro)
        await axios.post('http://localhost:3001/api/carros', carro)
       
        alert('Seu carro foi adicionado!')
    }
    catch(err) {
        console.warn(err)
    }
}

function PrepararTags(modeloInput, marcaInput, placaInput, anoInput, kmInput, precoInput, defeitosInput) {
    if(placaInput.length === 0) {
        carro.tags = [modeloInput.toUpperCase(), marcaInput.toUpperCase()]
    }
    else {
        carro.tags = [modeloInput.toUpperCase(), marcaInput.toUpperCase(), placaInput.toUpperCase()]
    }
    Adicionar(modeloInput, marcaInput, placaInput, anoInput, kmInput, precoInput, defeitosInput)
}
