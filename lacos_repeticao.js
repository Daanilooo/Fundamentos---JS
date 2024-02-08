const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota (aluno) {
    const [alunos, medias] = listaDeAlunosEMedias;
    if(alunos.includes(aluno)){
        

        const indice = alunos.indexOf(aluno);
        const media = medias[indice];

        console.log(`${aluno} tem a média ${media}.`)

    } 
    else{
        console.log('O aluno não está cadastrado!');
    }
}

exibeNomeNota("João");
