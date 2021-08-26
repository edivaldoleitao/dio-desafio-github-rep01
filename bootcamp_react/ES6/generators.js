//generators, fuções com pausa

function* generator() {
    console.log('pausa 1')
    yield 'valor 1' //  value 

    console.log()
    let value = yield 2

    console.log(value)
    yield 'valor 3'
}

const gen = generator()


//numero de yields - 1

console.log(gen.next())
console.log(gen.next())
console.log(gen.next('value outside')) // o next chama o valor do yield anterior
console.log(gen.next())


//implementar generator para objetos iteraveis

const obj = {
    values: [1,2,4,7],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }   
    }   
}

for (value of obj) {
    console.log(value)
}