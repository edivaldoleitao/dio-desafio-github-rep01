
// objeto obj 
var obj = {
    soma :(a, b = 1) =>  a + b  // arrow function, usando um valor default na entrada
}
 
obj['carro_marca'] = 'marca' // criaão de uma proprieda após a criação do objeto

console.log(obj.soma(2))