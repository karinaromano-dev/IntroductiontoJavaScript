//operador de comparacao, ou seja, ele tambem vai retornar o verdadeiro ou falso, mas ele eh um pouco diferente.
//Ele eh chamado de Operador Tenario
//O operador ternário é, basicamente, um if, ele faz uma comparacao, mas ele tem uma maneira especial de ser feita.
//Tem a escrita de maneira reduzida

//Ternario funciona como if else

const idadeMinima = 18;
const idadeCliente = 16;

//if classico:
if(idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log("suco")
}

//if - Operador Ternario
//Usado soh para operacoes mais curtas
//Como tem 3 operadores, eh chamado ternario

                //condicao              //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")