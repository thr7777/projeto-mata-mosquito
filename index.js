//INDENTIFICAÇÃO DA LARGURA E ALTURA DA PAGINA
//==============================================

let altura = 0  
let largura = 0

function ajusteTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    
}

ajusteTamanhoTela()

//===============================================
// POSIÇÃO RANDOMICA

function posicaoRandomica(){
    //apagar elemento anterior
    //ele basicamente pega o elemento anterior, e apaga para criar um novo, isso se o elemento existir
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }
    //============================
    //POSIÇÃO DA IMAGEM NA TELA ===============================
    //=========================================================
let posicaoX = Math.floor(Math.random() * largura) - 150 // atribuir um menos 90 para que a imagem nao saia da tela
let posicaoY = Math.floor(Math.random() * altura) - 150
// caso o elemento seja menor que 0 ele vai receber 0, se nao, ele recebe ele mesmo
//isso serve para que o mosquito ao receber uma posição negativa, o mosquito nao desapareça
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//criar o elemento html com o dom

let mosquito = document.createElement('img')
mosquito.src = "imagens/mosca.png"
mosquito.className = 'imagem_mosquito'
mosquito.id = 'mosquito'
//atribuição da posicao randomica
mosquito.style.position = 'absolute'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.back

//tamanho randomico do elemento
let tamanhoA = Math.floor(Math.random() * 150)

tamanhoA = tamanhoA <= 70 ? 70 : tamanhoA 
mosquito.style.height = tamanhoA + 'px'
mosquito.style.width = tamanhoA + 'px'

//evento onclick para o mosquito sumir ao clicar

mosquito.onclick = function(){
    this.remove()
}

// adicionando o elemento dentro do body

document.body.appendChild(mosquito)

// lado aleatorio

mosquito.className = ladoAleatorio()
}
setInterval(function ()
{
    posicaoRandomica()
}, 2000)
// setInterval(function(){
    //funcao
//}, 100)




//LADO ALEATORIO

function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)
    switch(lado){
        case 0:
            return 'inverterDireita'
        case 1:
            return 'inverterEsquerda'
    }
}


