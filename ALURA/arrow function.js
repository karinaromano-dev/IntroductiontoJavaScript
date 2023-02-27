function apresentar(nome){
    return `meu nome eh ${nome}`;
}

// Arrow function - terceiro tipo de funcao 
//sempre vem com const e nome da variavel
const apresentarArrow = nome => `meu nome eh ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de  linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
    return "somente numeros de 1 a 9"
    } else {
    return num1 + num2;
    }
}

//Hoisting: arrow function se comporta como expressao