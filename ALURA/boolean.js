//Boolean
// true and false sempre letras minusculas

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy, 0 vai sempre corresponder a false e 1 a true
// 0 => false
// 1 => true

console.log(0 == false) //true, comparacao entre 0 e o booleano false

// uso == pq quero comparar so o valor
// === comparar valor e o tipo

console.log("" == false) // "" string vazia eh considerado tipo falso

console.log(1 == true)

// null = tipo de dado que representa vazio, representa nada. 
let minhaVar; // sera undefined, mas pode ser utilizada
let varNull = null;

console.log(minhaVar) // undefined (espaco da variavel esta vazio = undefined)
console.log(varNull) // null (definimos como null)

// undefined
let numero = 3;
let texto ="Alura";
console.log(typeof numero) //typeof to find out the data type = number
console.log(typeof texto) //typeof to find out the data type = string

console.log(typeof minhaVar) //typeof to find out the data type = undefined
console.log(typeof varNull) //typeof to find out the data type = object
// !quando o null foi criado no JavaScript, foi criado como objeto e nao como null
