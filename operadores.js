// const idadeMinima = 18;
// const idadeCliente = 19;



// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

// const nome = "Danilo";
// const idade = 19;
// const cidade = "Extrema"
// const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`;
// console.log(apresentacao);

function soma(){
    return 2 + 2;
}

// ou
// Expressão de função
const multiplicacao  = function(num1,num2){
    return num1 * num2
}

// Arrow function

const apresentarArrow = nome => `meu nome é ${nome}`


// Arrow function com mais de uma linha

const somaNumerosPequenos = (num1,num2) => {
    if (num1 >= 10 || num2 >= 10){
        return "somente números de 1 a 9";
    }else{
        return num1 + num2
    }
}
function comParametro(param) {
    console.log(param)
}
comParametro()


console.log(apresentarArrow('Danilo'));
console.log(somaNumerosPequenos(11,9)); 
console.log(multiplicacao(2,3));