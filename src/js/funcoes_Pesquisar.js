import axios from 'axios'
export { PesquisarCarro, LimparResultado }

let div = document.querySelector('div#resultado')
const carro = {}


async function PesquisarCarro(modelo) {
    LimparResultado()
    Carregando(true)
    const carroAxios = await axios.get(`http://localhost:3001/api/carros/${modelo}`)
    if(carroAxios.data.length === 0) {
        Carregando(false)
        alert('[ERRO] Carro não encontrado!')
    }
    else {
        Carregando(false)
        for(let i = 0;i < carroAxios.data.length;i++){
            const { modelo, marca, placa, anoLançamento, kmRodados, preco, defeito } = carroAxios.data[i]
            carro.modelo = modelo
            carro.marca = marca
            carro.placa = placa
            carro.anoLançamento = anoLançamento
            carro.kmRodados = kmRodados
            carro.preco = preco
            carro.defeito = defeito
            AdicionarResultado()
        }
    }
}

function Carregando(estado) {
    if(estado === true) {
        let carregandoElement = document.createElement('p')
        let carregandoText = document.createTextNode('Carregando...')
        carregandoElement.setAttribute('id', 'carregando')

        carregandoElement.appendChild(carregandoText)
        div.appendChild(carregandoElement)
    }
    else {
        document.querySelector('p#carregando').remove()
    }
}

function AdicionarResultado() {
    let divCarro = document.createElement('div')
    divCarro.setAttribute('id', 'divCarro')

    let modeloElement = document.createElement('p')
    let marcaElement = document.createElement('p')
    let placaElement = document.createElement('p')
    let anoElement = document.createElement('p')
    let kmElement = document.createElement('p')
    let precoVistaElement = document.createElement('p')
    let precoParcelado48Element = document.createElement('p')
    let precoParcelado72Element = document.createElement('p')
    let defeitoElement = document.createElement('p')    

    let modeloText = document.createTextNode(`Modelo: ${carro.modelo}`) 
    let marcaText = document.createTextNode(`Marca: ${carro.marca}`) 
    let placaText = document.createTextNode(`Placa: ${carro.placa}`) 
    let anoText = document.createTextNode(`Ano Lançamento: ${carro.anoLançamento}`) 
    let kmText = document.createTextNode(`Km Rodados: ${carro.kmRodados}`) 
    let precoVistaText = document.createTextNode(`Preço a vista: R$ ${carro.preco}`) 
    let precoParcelado48Text = document.createTextNode(`Preço em 48x: R$ ${Divisão(48)}`) 
    let precoParcelado72Text = document.createTextNode(`Preço em 72x: R$ ${Divisão(72)}`) 
    let defeitoText = document.createTextNode(`Defeito: ${carro.defeito}`)    

    modeloElement.appendChild(modeloText)
    marcaElement.appendChild(marcaText)
    placaElement.appendChild(placaText)
    anoElement.appendChild(anoText)
    kmElement.appendChild(kmText)
    precoVistaElement.appendChild(precoVistaText)
    precoParcelado48Element.appendChild(precoParcelado48Text)
    precoParcelado72Element.appendChild(precoParcelado72Text)
    defeitoElement.appendChild(defeitoText)

    divCarro.appendChild(modeloElement)
    divCarro.appendChild(marcaElement)
    divCarro.appendChild(placaElement)
    divCarro.appendChild(anoElement)
    divCarro.appendChild(kmElement)
    divCarro.appendChild(precoVistaElement)
    divCarro.appendChild(precoParcelado48Element)
    divCarro.appendChild(precoParcelado72Element)
    divCarro.appendChild(defeitoElement)

    div.appendChild(divCarro)
}

function Divisão(vezes) {
    let preco = carro.preco
    preco = LimparNumero(preco)
    preco = preco / vezes

    return preco.toFixed(2)
}

function LimparNumero(numero) {
    let numeroLimpo = numero
    
    while(numeroLimpo.indexOf('.') != -1){
        numeroLimpo = numeroLimpo.replace('.', '')
    }

    while(numeroLimpo.indexOf(',00') != -1){
        numeroLimpo = numeroLimpo.replace(',00', '')
    }

    return numeroLimpo
}

function LimparResultado() {
    div.innerHTML = ''
}