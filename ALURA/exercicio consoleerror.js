// Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, 
//o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método console.error().

//Crie um arquivo .js em seu computador, escreva o seguinte código:

console.log("deu erro");
console.error("deu erro");

//Se executarmos, o resultado eh o mesmo para ambos os comandos acima.

//Vamos tentar novamente, passando uma informação um pouco diferente para console.error():

console.log("deu erro");
console.error(new Error("deu erro"));

//O que vimos acima - a palavra-chave new seguida de Error com inicial maiúscula -
// é um gostinho de como trabalhamos com classes em JavaScript.