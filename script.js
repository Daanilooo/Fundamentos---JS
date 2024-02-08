// Var é uma variavel que pode ser declarada em qualquer momento do código;

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area)


// let é uma variavbel que deve ser declarada antes de ser utilzada
let forma = "triangulo";
let altura = 5;
let comprimento = 7;
let area;

if (forma == "retângulo"){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2
}

console.log(area);

// Const é uma consntante que deve ser delcarada e ter valor atribuído antes de ser utilizada; 


// Conversão 

const dado = 456;
const dadoString = "456";

console.log(dado == dadoString);
console.log(dado + Number(dadoString));


// Dois sinais de iguais são comparados os valores. Tres sinais de iguais são comparados valores e tipo de variavel
