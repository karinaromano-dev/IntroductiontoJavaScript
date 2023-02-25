// Data Types -> Primitive (Numbers, Strings, Boolean, Null and Undefined)
// Null and Undefined
// Null = ausencia de valor e pode ser atribuido como valor a uma variavel:

let input = null;

if (input === null) {
    console.log("nao ha informacao");
} else {
    console.log(input);
}

let input1 = null;
let input2;

console.log(input1); //null (ausencia de valor, mas eh um valor atribuido a uma variavel que existe e foi iniciada)
console.log(input2); //undefined (tambem representa ausencia de valor, mas se refere ao valor 
// de uma variavel que nao foi inicializada, nao foi atribuida)
// Undefined tambem eh o valor retornado por uma funcao que nao tem clausula return.
//No cotidiano null eh um tipo de dado que tambem significa ausencia de valor, mas de maneira esperada
// Enquanto o undefined, eh uma ausencia de valor inesperada, causada por um bug ou erro no codigo
