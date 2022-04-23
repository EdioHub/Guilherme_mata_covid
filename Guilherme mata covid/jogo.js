
var altura = 0
var largura = 0
var vidas = 1
var tempo = 60
var criaMosquitoTempo = 2000
var nivel = window.location.search

nivel = nivel.replace('?', '')
if(nivel === 'facil'){
	criaMosquitoTempo = 2000

}else if(nivel === 'intermediario'){
	criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000

}

function ajustaTamanhoPalcoJogo(){
	 altura = window.innerHeight
	 largura= window.innerWidth
	 //console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(cria_mosquito)
		window.location.href = 'vitoria.html'
		

	}
	document.getElementById('cronometro').innerHTML = tempo
	
}, 1000)

function posicaoRandomica(){
	if(document.getElementById('corona')){	
		document.getElementById('corona').remove()

		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html';
			
		}
		document.getElementById('v' + vidas).src = 'imagens/descarte.png';
		vidas ++
		playAudioVidas()

	}

	var posix = Math.floor(Math.random()* largura) - 90
	var posiy =  Math.floor(Math.random() * altura) - 90
	posix = posix < 0 ? 0: posix
	posiy = posiy< 0 ? 0: posiy

	//criar  o elemento html
	var w = document.getElementById("myAudio"); 

		function playAudioerra() { 
			w.preload;
			x.volume = 0.7;
		  x.play(); 
	} 



	var corona = document.createElement('img')
	console.log(corona + 'corona qui')
	corona.src = 'imagens/corona.png'
	corona.className = ladoAleatorio() + ' ' + tamanhoAleatorio() 
	corona.style.left = posix +'px'
	corona.style.top = posiy +'px'
	corona.style.position = 'absolute'
	corona.id = 'corona'
	//document.getElementById('corona').style.border = "thick solid blue";
		
	
	corona.onclick = function(){ 
		this.remove()
		playAudio()	
	}

	document.body.appendChild(corona)
}
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
	case 0 :
		return 'corona1'

	case 1 :
		return 'corona2'

	case 2 :
		return 'corona3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
	case 0 :
		return 'ladoA'

	case 1 :
		return 'ladoB'
	}

}
