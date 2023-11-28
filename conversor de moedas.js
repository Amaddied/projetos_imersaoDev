var valorEmDolar = 64;
var cotacaoDoDolar = 4.85;
var cotacaoDoEuro = 5.31;
var cotacaoEmBitcoin = 181894.4;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2); //função toFixed() fixa a quantidade de casas decimais da variável
var valorEmRealBitcoin = valorEmDolar * cotacaoEmBitcoin;
valorEmRealBitcoin = valorEmRealBitcoin.toFixed(2);
alert(
  "Valor em real R$ " + valorEmReal + " Valor em Bitcoin " + valorEmRealBitcoin
);
