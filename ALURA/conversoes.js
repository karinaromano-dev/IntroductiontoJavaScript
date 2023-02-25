//tipo de dado
//importancia saber qual eh o tipo de dado com o qual estamos trabalhando e como trabalha junto com os booleanos

// conversao implicita
const numero = 456;
const numeroString = "456"; //string entre aspas

console.log(numero === numeroString) //false (estamos comparando um numero com um texto) *===*
console.log(numero == numeroString) //true (estamos comparando um numero com um texto) *==*
console.log(numero + numeroString) //456456 (vira uma concateacao)

//= para atribuir valor a uma variavel
//== para fazer uma comparacao pelo valor
//=== compara valor e tipo

//conversao explicita
// vamos usar duas funcoes do JS:
//funcao Number() vai transformar a string em numero
//funcao String()
console.log(numero + Number(numeroString))

//NaN Not a Number