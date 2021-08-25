//well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag


//symbol é um identificador único

uniqueId = Symbol('id 1')
uniqueId2 = Symbol('id 2')

console.log(uniqueId === uniqueId2)
console.log(uniqueId2)


const array = [1,2,4,7]

const it = array[Symbol.iterator]()


//forma de iterar sobre o array manualmente, usando a
//interface iterator, da propriedade "privada" symbol

/*
while(true) {
    let {value, done} = it.next() //retorna no destruct um value e done

    console.log(value)
    if(done){
        break
    }
}

*/


//forma mais simples de fazer a iteração

for (let value of array){
    console.log(value)
}


//implementa o iterator em um objeto

const obj = {
    values: [1,2,4,7],
    [Symbol.iterator]() {
        let index = 0
        
        return {
            next: () => {
                index++
                
                return {
                    value: this.values[index - 1],
                    done: index > this.values.length
               }
           }
       }
    }   
}

//agora é possível iterar sobre um objeto, por via de regra não pode

for (let value of obj) {
    console.log(value)
}

//também é possível fazer destruct pra um  array

var arr = [...obj]

console.log(arr)