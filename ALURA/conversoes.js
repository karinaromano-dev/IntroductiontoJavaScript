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

//....revisao...

//Conversao de valores

//Como podemos utilizar o valor de uma variavel numerica em um texto, 
//ou utilizar uma string que contenha apenas numeros para fazer contas?

// Para estes casa no JS Number() e String() que permite converter os dados para numeros ou textos

//String()

let telefone = 12341234;
console.log("O telefone eh " + String (telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//toString()

let telefone1 = 12341234;
console.log("O telefone eh " + telefone1.toString()); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let usuarioConectado = false;
console.log(String(usuarioConectado)); //teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

//Number()
//Vamos fazer alguns exemplos de conversao de textos e booleanos atraves de Number():
//Vamos calcular a area de um retangulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:
let largura1 = "10";
let altura1 = "5";
console.log( + largura * +altura); // teremos a conversão de String para números realizado usando o + antes das variáveis;

let meuNome = "leonardo";
console.log(Number(meuNome));// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( +meuNome); // a conversão também retornará NaN

let usuarioConectado1 = false;
console.log(Number(usuarioConectado1));
// teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2));
// agora teremos a conversão de true (verdadeiro) para o número 1.