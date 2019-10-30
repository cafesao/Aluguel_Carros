import { PesquisarCarro, LimparResultado } from "./funcoes_Pesquisar"
import { PrepararTags } from "./funcoes_Adicionar"

//PESQUISAR

let modeloInputPesquisar = document.querySelector('div#pesquisar input#modeloInput')
let pesquisarButton = document.querySelector('button#pesquisarButton')
let apagarButton = document.querySelector('button#apagarButton')

pesquisarButton.addEventListener('click', Pesquisar)
apagarButton.addEventListener('click', LimparResultado)

modeloInputPesquisar.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) { 
        Pesquisar()
    }
})


function Pesquisar() {
    if(modeloInputPesquisar.value.length === 0) {
        alert('[ERRO] Por favor, prencha o campo de modelo')
    }
    else {
        PesquisarCarro(modeloInputPesquisar.value)
        LimparPesquisar()
    }
}

function LimparPesquisar() {
    modeloInputPesquisar.value = ''
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

adicionarButton.addEventListener('click', Adicionar)

function Adicionar() {
    if(modeloInputAdicionar.value.length === 0 || marcaInputAdicionar.value.length === 0 || anoInputAdicionar.value.length === 0 || precoInputAdicionar.value.length === 0) {
        alert('[ERRO] Por favor, prencha todos os campos obrigatorios!')
    }
    else {
        PrepararTags(modeloInputAdicionar.value, marcaInputAdicionar.value, placaInputAdicionar.value, anoInputAdicionar.value, kmInputAdicionar.value, precoInputAdicionar.value, defeitosInputAdicionar.value)
        LimparAdicionar()
    }
}

function LimparAdicionar() {
    modeloInputAdicionar.value = ''
    marcaInputAdicionar.value = ''
    placaInputAdicionar.value = ''
    anoInputAdicionar.value = ''
    kmInputAdicionar.value = ''
    precoInputAdicionar.value = ''
    defeitosInputAdicionar.value = ''
}
