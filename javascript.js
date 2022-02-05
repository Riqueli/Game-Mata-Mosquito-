
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')


if(nivel === 'facil') {
	//1s e meio
	criaMosquitoTempo = 1500

} else if (nivel === 'medio') {
	//1s
	criaMosquitoTempo = 1000

} else if (nivel === 'dificil') {
	//0.75s
	criaMosquitoTempo = 750

}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth

  console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
  tempo -= 1
  
  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'

  }else{
    document.getElementById('cronometro').innerHTML = tempo 
  }
},1000)

function posicaoRandomica(){

  //remover o mosquito anterior caso exista
  if(document.getElementById('mosquito')){
  document.getElementById('mosquito').remove()

  if(vidas > 3 ){
    window.location.href = 'fim_de_jogo.html'
  }else{
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
  vidas++
  }
}

  var posicaox = Math.floor(Math.random() *  largura) - 90
  var posicaoy = Math.floor(Math.random() * altura) - 90

  posicaox = posicaox < 0 ? 0 : posicaox
  posicaoy = posicaoy < 0 ? 0 : posicaoy
  
  console.log(posicaox, posicaoy)
  
  //criar o elemento html 
  var mosquito = document.createElement('img')
  mosquito.src ='imagens/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaox + 'px'
  mosquito.style.top = posicaoy + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
    var audio1 = new Audio();
    audio1.src = "Som/Song.wav";
    audio1.play();
  }
  
  document.body.appendChild(mosquito)
  

}

//Altera o tamanho do elemento mosquito a cada ciclo
function tamanhoAleatorio () {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

//Altera o ponto de vista do mosquito em relação a tela
function ladoAleatorio () {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'LadoA'

        case 1:
            return 'LadoB'
    }
}

