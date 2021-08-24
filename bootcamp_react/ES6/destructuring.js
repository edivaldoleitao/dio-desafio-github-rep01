// o destructuting quebra em variaveis
// no caso dos arrays de acordo com a posição

var array = ['carro', 'porta', 'janela']

var [carro, porta, janela, comoda] = array

console.log(carro, porta, janela, comoda)

var obj = {
    nome: 'nome',
    teste: 'teste',
    obj2: {
        nome2: 'nome2'
    }
}

//para objetos se for quebrar as variaveis e copiar, tem de ser dentro de uma variavel com
// mesmo nome
var {nome} = obj

// caso queira pode ser renomeado desta forma colocando o nome original primeiro
// e depois o novo nome
var {teste: teste2} = obj

teste2 = 'teste2'
nome = 'nome2'

console.log(teste2)

//destruct em 2 niveis

var {
    obj2: {nome2}
} = obj

console.log(nome2)

//também pode ser usado em funções nos seus argumentos, inclusive com default values