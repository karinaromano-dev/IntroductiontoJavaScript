// Uma pessoa criou 3 variáveis diferentes para armazenar dados numéricos importantes. 
//Para a primeira variável, utilizou a declaração var, deu o nome de respostaDeTudo e 
//atribuiu o valor 42. Na segunda variável, utilizou a declaração let, deu o nome de idade e atribuiu o valor 29.
// Já na terceira variável, utilizou a declaração const, deu o nome de pi e atribuiu o valor 3.14, 
//como mostra o código abaixo:

var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

//Para testar seus conhecimentos em JavaScript, criou um bloco trocando o valor das variáveis
// entre elas e incluiu um console.log dentro e outro fora do bloco:

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29;
    console.log(respostaDeTudo, idade, pi)
}
console.log (respostaDeTudo, idade, pi)

// Variáveis declaradas com var ou let podem ser reatribuídas. 
// Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. 
// No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto...
// ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, 
//mas o valor mantido pela variável não se torna imutável.

//const nao pode ser variavel, nao podemos alterar o valor dela.

// Opiniao do instrutor
// Ao declararmos uma variável como const ela deve obrigatoriamente receber um valor: const taxaComissao = 0.25;
// Ao declararmos let, ao contrário, podemos apenas declarar a variável, sem atribuir nenhum valor.
// Além disso, o valor inicial pode ser modificado depois:

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100