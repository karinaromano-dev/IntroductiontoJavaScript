//var eh a primeira variavel que surgiu no JS e podemos utilizar em qualquer parte do codigo
//A seguir fazer um programa que vai calcular a area de um retangulo

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
//var area;

//let surgiu em 2015 junto com o const

//let forma = 'retangulo';
//let altura = 5;
//let comprimento = 7;
//let area;

//    if (forma === 'retangulo'){
//        area = altura * comprimento;
//    } else {
//        area = (altura * comprimento) / 2;

//}

// console.log(area)

// const eh uma constante, nao deixa alterar 
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else { 
    area = (altura * comprimento) / 2;

}

console.log(area)

// var, que não é muito recomendada de se utilizar, hoje em dia, por ela ser muito solta; 
//a let, que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada;
// e a const que é fixa, o valor dela, uma vez declarado, fica preso nela e também tem que ser declarado antes.