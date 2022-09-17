//INDENTIFICAÇÃO DA LARGURA E ALTURA DA PAGINA
//==============================================

let altura = 0 
let largura = 0
let vidas = 1
let pontos = 0
function ajusteTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth
    
}



ajusteTamanhoTela()

let dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')


function dificuldadeJogo(){
    let tempoDificuldade = 1500
    if(dificuldade == 'facil'){
        return tempoDificuldade = 1500
    }
    else if(dificuldade == 'dificil'){
        return tempoDificuldade = 1000
    }
    else if(dificuldade == 'impossivel'){
       return tempoDificuldade = 750
    }
    
}




//===============================================
// POSIÇÃO RANDOMICA

    
function posicaoRandomica(){
    //apagar elemento anterior
    //ele basicamente pega o elemento anterior, e apaga para criar um novo, isso se o elemento existir
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

            //controle dos pontos de vidas
        document.getElementById('v' + vidas).src = '/imagens/coracao_vazio.png'
        vidas++
        if(vidas > 3){
           

            window.location.href = 'game-over.html'

        }
    }
    //============================
    //POSIÇÃO DA IMAGEM NA TELA ===============================
    //=========================================================
let posicaoX = Math.floor(Math.random() * largura) - 150 // atribuir um menos 150 para que a imagem nao saia da tela
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


//tamanho randomico do elemento
let tamanhoA = Math.floor(Math.random() * 150)

tamanhoA = tamanhoA <= 70 ? 70 : tamanhoA 
mosquito.style.height = tamanhoA + 'px'
mosquito.style.width = tamanhoA + 'px'

//evento onclick para o mosquito sumir ao clicar

mosquito.onclick = function(){
    this.remove()
    pontos ++

}
console.log(pontos)
// adicionando o elemento dentro do body

document.body.appendChild(mosquito)

// lado aleatorio

mosquito.className = ladoAleatorio()
}


setInterval(function ()
{
    posicaoRandomica()
}, dificuldadeJogo())

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


//cronometro
let tempo = 30
setInterval(
    function() {
        document.getElementById('tempo').innerHTML = "tempo :" + tempo

        console.log(tempo)
        tempo -= 1
        

        if(tempo == 0){
          window.location.href = 'parabens.html' 
        
        }
    }, 1000
)

