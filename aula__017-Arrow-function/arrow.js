function pessoaNome(nome) {
    return `meu nome e ${nome}`;
}

//console.log(pessoaNome("Arsenio"));

const pessoaNomeArrow = nome => `meu nome e ${nome}`;
//console.log(pessoaNomeArrow("Junior"));

const soma = (numero1, numero2) => numero1 + numero2;
//console.log(soma(5, 5));

const numerosPequenos = (numero1, numero2) => {
    if (numero1 || numero2 > 10) {
        return "Somente numero menores que 10";
    } else {
        return numero1 + numero2;
    }
}

console.log(numerosPequenos(9, 70));