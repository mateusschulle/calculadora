let tela = document.querySelector(".calculadora__tela")
let visor = "";
let calculo = "";

const listaDeBotoes = document.querySelectorAll(".botao");
let contador = 0;

while (contador < listaDeBotoes.length) {
    listaDeBotoes[contador].onclick = inserirNumero;
    contador++;
}

function inserirNumero(event) {
    console.log(event.target.innerHTML)
    calculo = calculo + event.target.innerHTML; 
    console.log(calculo);
    visor = visor + event.target.innerHTML;
    tela.innerHTML = visor;
  
};

let botaoLimpar = document.querySelector(".botao__limpar");
botaoLimpar.onclick = limpaTela;

function limpaTela() {
    calculo = "";
    visor = "";
    tela.innerHTML = visor;
};

let botaoIgual = document.querySelector(".botao__igual");
botaoIgual.onclick = calcular;

function calcular() {
    calculo = eval(calculo);
    tela.innerHTML = calculo;
}

