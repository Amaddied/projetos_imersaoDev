var jogar = prompt('Quer jogar s/n?')
if (jogar === 's') { 

var numSecreto = parseInt(Math.random() * 1001);
var contador = 10;

while (contador > 0) {
  var chute = parseInt(prompt("Digite um número entre 1 e 1000"));

  if (chute === numSecreto) {
    alert('Acertou!');
    break; // Para o loop se o número for acertado.
  } else if (chute > numSecreto) {
    alert('Errou... o número secreto é menor');
  } else if (chute < numSecreto) {
    alert('Errou... o número secreto é maior');
  }

  contador -= 1; // Decrementa o contador
}

if (contador === 0) {
  alert('Suas tentativas acabaram. O número secreto era: ' + numSecreto);
}}
