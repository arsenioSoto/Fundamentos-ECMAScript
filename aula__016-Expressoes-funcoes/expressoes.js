//declaracao da funcao

function pessoaNome(nome) {
    // bloco de codigo

    console.log(nome);
}

//pessoaNome("Arsenio");

//expressao da funcao
//const soma = function(numero1, numero2) { return numero1 + numero2 }
//console.log(soma(2, 5));

//processo de hoisting

//function nome() {
//  return "Arsenio";
//}

console.log(nome());

function nome() {
    return "Arsenio";
}


const soma = function(numero1, numero2) { return numero1 + numero2 }

console.log(soma(2, 5));