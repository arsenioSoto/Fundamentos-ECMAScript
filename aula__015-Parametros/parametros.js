//function numero() {
//  return 5 + 5;
//}

//console.log(numero());

//function numero(numero1, numero2) {
//  return numero1 + numero2;
//}

//console.log(numero(5, 5));
//console.log(numero(10, 20));
//console.log(numero(-70, 80));
//console.log(numero(9, 8));

//Ordem de Precedencia das funcoes

function pessoa(nome, idade, endereco, nacionalidade) {
    return `meu nome e ${nome} e tenho ${idade} anos o meu endereco e ${endereco} de nacionalidade ${nacionalidade}`;
}

//console.log(pessoa("Arsenio", 23, "Ferroviario", "Mocambicana"));

function numero(numero1, numero2) {
    return numero1 + numero2;
}

function multiplicacao(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
}

console.log(multiplicacao(numero(5, 5)));