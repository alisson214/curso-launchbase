
// if(media > 6) {
//     console.log(`A media foi de ${media}, PARABÉNS!!!`)
// } else {
//     console.log('A media foi menor que 5')
// }

// console.log(media < 6)

// OPERADORES LOGICOS '&&', '||' E O '!'

// if(!(media >= 18) ||  media ===17) {
//     console.log('bloquear a entrada')
// }else {
// console.log('deixa entrar')
// }

//             OBJETOS

// const aluno01 = {
//     nome:'Alisson',
//     idade: 33,
//     nota: 10
// }

// const aluno02 = {
//     nome: 'sabrina',
//     idade: 29,
//     nota: 9
// }

// const aluno03 = {
//     nome: 'luizão',
//     idade: 6,
//     nota: 7
// }

// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

// console.log(media)


//                ARRAYS

// const alunos = [
//       {
//         nome:'Alisson',
//         nota: 10
//       },
//       {
//         nome: 'sabrina',
//         nota: 9
//       },
//       {
//         nome: 'luizão',
//         nota: 7 
//       }
// ]

// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 

// console.log(media)

//               exercicio 
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

// const empresa = [
//     {
//         Nome: 'Rocketseat',
//         Cor: 'Roxo'
//     },
//     {
//         Foco: 'Programação',
//         Endereço: 'Rua: Guilherme Gembala, 260'
//     }]

// const media = [`a empresa ${empresa[0].Nome}, está localizada na rua: ${empresa[1].Endereço}`]

// console.log(media)

//                       funções e metodos

const AlunosDaTurmaA = [
      {
        nome:'Alisson',
        nota: 10
      },
      {
        nome: 'sabrina',
        nota: 9
      },
      {
        nome: 'luizão',
        nota: 7 
      }
]


const AlunosDaTurmaB = [
    {
      nome:'paulo',
      nota: 0
    },
    {
      nome: 'mari',
      nota: 9
    },
    {
      nome: 'claudia',
      nota: 4
    }
]

function calculaMedia(alunos) {
    return  (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3 

}

const media1 = calculaMedia(AlunosDaTurmaA)
const media2 = calculaMedia(AlunosDaTurmaB)



function EnviaMensagem(media) {
if(media > 6) {
    console.log(`A media foi de ${media}, PARABÉNS!!!`)
} else {
    console.log('A media foi menor que 5')
 }
}

EnviaMensagem(media1, 'turmaA')
EnviaMensagem(media2, 'turmaB')
