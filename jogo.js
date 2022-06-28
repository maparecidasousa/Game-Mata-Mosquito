let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 10
let tempoMosquito = 1500

function iniciarJogo(){
var nivel = document.getElementById("iniciarJogo").value

if(nivel ===''){
  alert('Selecione um nível para iniciar o jogo')
  return false
}
window.location.href = "app.html?" + nivel
// O ponto de interrogação é utilizado para separar a página que quer requisitar dos parâmetros, que no caso é os nível do iniciarJogo.
}


var nivel = window.location.search
nivel.replace('?', '')

if (nivel ==="Fácil"){
  tempoMosquito = 1500
} else if (nivel === "Médio"){
  tempoMosquito = 1000
} else if ( nivel ==="Difícil"){
  tempoMosquito = 750
}


function ajustarTamanhoJogo() {
  largura = window.innerWidth;
  altura = window.innerHeight;
  console.log(largura, altura);
}

ajustarTamanhoJogo();

let cronometro = setInterval( function(){
  tempo -=1

  if(tempo<0) {
    clearInterval (cronometro)
    clearInterval(criarmosquito)
    window.location.href ="vitoria.html"
   
  } else{
  document.getElementById("cronometro").innerHTML = tempo 
}} , tempoMosquito)

function posicaoRandomica() {
  //Faz o mosquito aparecer de forma randômica (aleatoria)
  let posicaox = Math.floor(Math.random() * largura) - 90;
  let posicaoy = Math.floor(Math.random() * altura) - 90;

  // remover o mosquito anterior (caso exista)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if(vidas > 3){
       window.location.href ="fim_de_jogo.html"
    }

    else{
    document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"

    vidas++
  }
  }

  posicaox = posicaox < 0 ? 0 : posicaox;
  posicaoy = posicaoy < 0 ? 0 : posicaoy;

  console.log(posicaox, posicaoy);

  //criar o elemento html (mosquito)no javascript,
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoAleatorioMosquito() + " " + ladoAleatorio();
  mosquito.style.left = posicaox + "px";
  mosquito.style.top = posicaoy + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function(){
    this.remove()
  }
  // mosquito.id = "mosquito"; Atribui um id que é unico, vai ser necessário para remover o mosquito antes de aparecer o outro. 
  document.body.appendChild(mosquito);
  ladoAleatorio();
  console.log(ladoAleatorio());
}
//Criar mosquitos de tamanhos diferentes. Com o Math.floor * 3 os tamanhos vão ser 0, 1 e 2 dessa forma o usa o switch case que no caso poderia ser um if else para a cada um estilo de mosquito (css) quando estiver nas posições, então por exemplo quando estiver na posição 0 vai se relacionar com css mosquito 1, na posição 1 com css mosquito 1 etc.
function tamanhoAleatorioMosquito() {
  var classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}
tamanhoAleatorioMosquito();
console.log(tamanhoAleatorioMosquito());

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}


