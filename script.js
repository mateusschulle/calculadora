let tela = document.querySelector(".calculadora__tela")
let visor = "";
let calculo = "";
let resultado = "";
const listaDeBotoes = document.querySelectorAll(".botao");
let contador = 0;

while (contador < listaDeBotoes.length) {
    listaDeBotoes[contador].onclick = inserirNumero;
    contador++;
}

function inserirNumero(event) {
    calculo = event.target.innerHTML;
    resultado = resultado + calculo;
    visor = visor + event.target.innerHTML;
    tela.innerHTML = visor;
  
};

let botaoLimpar = document.querySelector(".botao__limpar");
botaoLimpar.onclick = limpaTela;

function limpaTela() {
    calculo = "";
    resultado = "";
    visor = "";
    tela.innerHTML = visor;
};

let botaoIgual = document.querySelector(".botao__igual");
botaoIgual.onclick = calcular;

function calcular() {
    resultado = eval(resultado);
    tela.innerHTML = resultado;
}

