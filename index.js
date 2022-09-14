//INDENTIFICAÇÃO DA LARGURA E ALTURA DA PAGINA
//==============================================

let altura = 0  
let largura = 0

function ajusteTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajusteTamanhoTela()

//===============================================
// POSIÇÃO RANDOMICA
function posicaoRandomica(){
    
let posicaoX = Math.floor(Math.random() * largura) - 90 // atribuir um menos 90 para que a imagem nao saia da tela
let posicaoY = Math.floor(Math.random() * altura) - 90
// caso o elemento seja menor que 0 ele vai receber 0, se nao, ele recebe ele mesmo
//isso serve para que o mosquito ao receber uma posição negativa, o mosquito nao desapareça
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY



console.log(posicaoX, posicaoY)

//criar o elemento html com o dom

let mosquito = document.createElement('img')
mosquito.src = "imagens/mosca.png"
mosquito.className = 'imagem_mosquito'

//atribuição da posicao randomica
mosquito.style.position = 'absolute'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.back

//tamanho
let tamanhoA = Math.floor(Math.random() * 150)

tamanhoA = tamanhoA <= 70 ? 70 : tamanhoA 
mosquito.style.height = tamanhoA + 'px'
mosquito.style.width = tamanhoA + 'px'




// adicionando o elemento dentro do body

document.body.appendChild(mosquito)

// lado aleatorio

mosquito.className = ladoAleatorio()
}
posicaoRandomica()

// tamanho randomico do mosquito


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



