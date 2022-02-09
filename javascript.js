var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 1500

//UTILIZA-SE O SEARCH PARA RETORNAR O VALOR DO NÍVEL, INCLUÍNDO A INTERROGAÇÃO

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'facil') {
	//1500
	criaMosquitoTempo = 1500
} else if (nivel === 'medio') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'dificil') {
	//750
	criaMosquitoTempo = 750
}

//DIMENSIONAMENTO DA TELA ONDE O APLICATIVO ESTÁ RODANDO

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'

	} else {

		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)


//POSICIONAMENTO DO MOSQUISTO DE FORMA RANDÔMICA
function posicaoRandomica(){

  // REMOVER O MOSQUITO ANTERIOR (CASO EXISTA)
  if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}

  var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

  
 	//CRIAR O ELEMENTO HTMAL DE FORMA PROGRAMADA
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
      //CONCATENAÇÃO DO ESPAÇÃO PARA QUE O INTERPRETADOR ENTENDA QUE SÃO DUAS CLASSES DIFERENTES, E NÃO UMA STRING
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    var audio1 = new Audio();
    audio1.src = "Som/Song.wav";
    audio1.play();
      
    }
  
    document.body.appendChild(mosquito)
  }
  

//CRIAR MOSQUITOS DE TAMANHOS ALEATÓRIOS
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//POSICIONAMENTO ALEATÓRIA - ESPELHAMENTO DA FIGURA PARA DAR MAIOR DINÁMICA AO JOGO

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}
