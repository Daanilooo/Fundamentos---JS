const notas = [10, 6, 8];

notas.push(7, 9);

notas.pop()
const media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log(notas)
console.log(media)


const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

const sala = nomes.slice(0,3);
nomes.splice(1, 2, "Rodrigo");


console.log(sala)
console.log(nomes)

const animaisDoAquario = ['1', '2', '3', '4']

animaisDoAquario.splice(1,0,'5')
animaisDoAquario.splice(3,2,'6')

console.log(animaisDoAquario)