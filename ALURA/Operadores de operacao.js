//== faz comparacao e faz a conversão implícita automaticamente, antes de fazer essa comparacao
//=== sempre compara os valores sem fazer essa comparacao antes, o numero e uma string nao sao iguais quando usamos ===

//== (comparacao implicita)
const numero = 5;
const texto ="5";
console.log(numero == texto) // true

//=== nao faz essa conversao automaticamente, nesse caso temos que fazer a conversao de forma manual
//
const numero1 = 5;
const texto1 ="5";
console.log(numero1 === texto1) // false

//typeof to find ou the type of data
console.log(typeof numero) // number
console.log(typeof texto) //string

//== compara so o valor
//=== compara o valor e o tipo de dado
//As boas praticas pede para usar o === e quando for fazer a conversao, fazer de forma explicita

//conversao explicita

Number()
String()

// Alem dos operadores matematicos comumente utilizados ( + - * / )
//= para atribuicao
//== para compara o valor (conversao implicita)
//===compara o valor e o tipo de dado
//||: Operador "ou", retorna true caso uma condicao seja valida;
//&&: Operador "e", retorna true somente se todas as condicoes forem validas;
//!= e !==: Operadores "nao igual" e "estritamente nao igual", utilizados para comparacao,
//da mesma forma que == e === retornam true ou false.
//Documentacao: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
