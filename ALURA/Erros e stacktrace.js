//Os erros sao escritos por pessoas
//sempre tente ler os erros da melhor forma possivel
//O que eh cada parte do erro...

//ex erro1: const numero; = const nao pode ser criado sem valor;
//SyntaxError: Missing initializer in const declaration
//Erro de sintaxe - esta faltando uma declaracao no inicializador const

const numero = 0;

//ex erro 2: console.log(numero  //SyntaxError: missing ) after argument list
console.log(numero)

// ex erro 3: console.log(minhaVar); //ReferenceError: minhaVar is not defined at Object
//const minhaVar = "oi";
console.log(minhaVar);

//ex erro 4: stacktrace toda a lista que pontua os erros onde o JavaScript nos mostra todo o caminho 
//que nosso código executou e todos os arquivos internos da ferramenta, da biblioteca, da linguagem 
//de programação, que estão sendo usados para fazer com que nosso código funcione.

//O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:
//RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. 
//Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero,
// mas recebe -1.

//ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável
// que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados,
// mas também pode indicar um erro no programa.

//SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue 
//executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta,
// por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves
// ou colchetes.

//TypeError: Indica que o código esperava receber um dado de um determinado tipo, 
//tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.