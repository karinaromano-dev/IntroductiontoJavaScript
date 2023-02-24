const text1 = "Hello World!";
const text2 = 'Hello World!';
const password = "passwordSuperSafe456";
const StringOfNumbers = "34567";

const citacao = 'O Leo disse "oi"';
console.log(citacao)

const citacao2 = "O Leo disse'oi'";
console.log(citacao2)

// template string ou template literal (pesquisar)

// JOINING STRINGS
// CONCATENATION AND INTERPOLATION
// CONCATENATION = uses the + sign to join two string values together
// var name = 'Jane'
// var greeting = 'Hi ' + name
// INTERPOLATION = is when you use template literals o join pieces of data together. 
// They use sign $, followed by the curly brackets {}
// var name = 'Jane'
// var greeting = 'Hi ${name}'

const myName = "Karina";
const introduction = "Hi, my name is "
console.log(introduction + myName)

// UTF = Unicode Transformation Format (UTF-16, 16 espacos em bits ocupados por cada caractere) 
// usamos \u para sinalizar ao JavaScript de que estamos falando de codigos Unicode e nao de strings de texto usuais.
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Trabalhando com Strings
// Existem varios metodos para manipular strings de texto: alterar da Maiuscula para minuscula
// contar quantas letras tem uma palavra
// retirar espacos
// juntar duas strings, etc.

// Exemplos praticos:
// Padronizar uma comparacao entre strings:
const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

console.log(cidade1 === input1)
//false
// para o JavaScript, ambos os dados sao apenas sequencias de caracteres, e a comparacao vai falhar
// pois o JavaScript diferencia minusculas e maiusculas, tanto nos valores dos dados, quanto no codigo que escrevemos.

// uma das formas de tratar isso eh padronizando todos os inputs para o formato de texto que sera comparado
// Nesse caso transformando todos os caracteres em letras minusculas.
// .toLowerCase()
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo)

// length -> utilizada para sabermos quantos caracteres uma string contem:
// a Propriedade length eh muito usada no dia a dia do desenvovimento web.
// length nao leva () no final da palavra. Pesquisar diferenca entre metodos e propriedades.
const senha = "minhaSenha123";
console.log(senha.length)
// 13 caracteres
