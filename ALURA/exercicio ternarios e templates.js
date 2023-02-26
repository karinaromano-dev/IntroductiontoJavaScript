const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// Os operadores, entre outras coisas, sao usados para comparar condicoes.
//A notacao  ${}  permite a insercao de valores de variaves dentro de uma string, mas nao somente isso...

const pedido =` ${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido) // Leo diz: "por favor, quero beber cerveja"

//Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:
//1) O uso de operadores: >= como operador de comparação entre o valor da variável idade e 18
// e também o operador ternário como condicional para retornar o valor da variável bebidaMaior 
//ou bebidaMenor de acordo com o resultado da comparação.

//2) Template strings: Utilizamos a sintaxe do acento grave ``+ ${} em conjunto com as aspas duplas ””
//. Teste também com aspas simples!

//3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o ${},
// mas também fazer operações com JavaScript - por exemplo, condicionais - e inserir o correspondente 
//ao true ou false na string de texto.

