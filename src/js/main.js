import { PesquisarCarro } from "./funcoes_Pesquisar"
import { PrepararTags } from "./funcoes_Adicionar"

function LimparCampos(array) {
    for(let i = 0; i < array.length; i++) {
        array[i].value = ''
    }
}

function AdicionarEnter(elemento, funcao) {
    elemento.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            funcao()
        }
    })
}

function AdicionarClickBotao(elemento, funcao) {
    elemento.addEventListener('click', funcao)
}

function LimparDivHTML() {
    div.innerHTML = ''
}

//PESQUISAR

let modeloInputPesquisar = document.querySelector('div#pesquisar input#modeloInput')
let pesquisarButton = document.querySelector('button#pesquisarButton')
let apagarButton = document.querySelector('button#apagarButton')
let div = document.querySelector('div#resultado')

AdicionarClickBotao(pesquisarButton, Pesquisar)
AdicionarClickBotao(apagarButton, LimparDivHTML)

AdicionarEnter(modeloInputPesquisar, Pesquisar)

function Pesquisar() {
    if(modeloInputPesquisar.value.length === 0) {
        alert('[ERRO] Por favor, prencha o campo de modelo')
    }
    else {
        LimparDivHTML()
        PesquisarCarro(modeloInputPesquisar.value)
        LimparCampos([modeloInputPesquisar])
    }
}

//ADICIONAR

let modeloInputAdicionar = document.querySelector('div#adicionar input#modelInput')
let marcaInputAdicionar = document.querySelector('div#adicionar input#marcaInput')
let placaInputAdicionar = document.querySelector('div#adicionar input#placaInput')
let anoInputAdicionar = document.querySelector('div#adicionar input#anoInput')
let kmInputAdicionar = document.querySelector('div#adicionar input#kmInput')
let precoInputAdicionar = document.querySelector('div#adicionar input#precoInput')
let defeitosInputAdicionar = document.querySelector('div#adicionar input#defeitosInput')

let adicionarButton = document.querySelector('button#adicionarButton')

AdicionarClickBotao(adicionarButton, Adicionar)

function Adicionar() {
    if(modeloInputAdicionar.value.length === 0 || marcaInputAdicionar.value.length === 0 || anoInputAdicionar.value.length === 0 || precoInputAdicionar.value.length === 0) {
        alert('[ERRO] Por favor, prencha todos os campos obrigatorios!')
    }
    else {
        if(placaInputAdicionar.length === 0) {
            placaInputAdicionar = 0
        }
        PrepararTags(modeloInputAdicionar.value, marcaInputAdicionar.value, placaInputAdicionar.value, anoInputAdicionar.value, kmInputAdicionar.value, precoInputAdicionar.value, defeitosInputAdicionar.value)
        LimparCampos([modeloInputAdicionar, marcaInputAdicionar, placaInputAdicionar, anoInputAdicionar, kmInputAdicionar, precoInputAdicionar, defeitosInputAdicionar])
    }
}