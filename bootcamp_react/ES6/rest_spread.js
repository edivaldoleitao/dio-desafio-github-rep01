// function que usa reduce e rest operator(...) que é a lista de argumentos que sobraram ou seja não foram explicitados na entrada,
// o ...args é um array montado a partir dos parametros
//reduce aplica uma função iterando nos elementos do array e acumula o resultado em total, que é iniciado com zero

function soma(...args) {
    return args.reduce((total, valor) => total + valor, 0) //aplica reduce no array
}

console.log(soma(1,1,1,1,1))

// exemplo de rest pegando os primeiros
function param(a, b, ...rest) {
    console.log('mostra primeiro : ' + a + ' e segundo: ' +  b + ' depois o resto: ' + rest)
}

param(1, 2, 3,2,2,12,12,12,1)

//o spread operator transforma array em parametros para lista e tem o mesmo modo de escrever (...)
// funciona também em objetos literais como string e objetos construtores

const spread = (...rest) => {
    return soma(...rest) // transforma o array em parametros
}

console.log(spread(1,2,4))


const obj = {
    propriedade: 'propriedade 1'
}

// no obj2 se itera no obj e pega suas propriedades, mas que só pode ser usado para
// outro objeto 
const obj2 = {
    ...obj,
    propriedade2: 'propriedade 2'
}

//const obj4 = obj // dessa forma se passa por referencia

// dessa forma se copia através de um shallow copy, mas caso exista alguma 
// propriedade que seja outro objeto, então pode ser acessado diretamente
const obj4 = { ...obj } 
obj4.propriedade = 'nada'                     

//não é alterado no obj, já que foi passsado uma cópia para obj4
console.log(obj)