//o callback é uma função Uma função callback é uma função passada a outra função como argumento,
// que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

//Execução assíncrona

function fnCallback(callback) {
    setTimeout(function(){
        callback('fncallback')
    },1000)
}

function fnCallback2(callback){
    setTimeout(function() {
        callback('fncallback 2')
    },1000)
}

function callbackAll() {
    try {                                // eu posso chamar o try catch a cada chamada de função pra tratar o código
        fnCallback( function (data) {   
            console.log(data)
            
            fnCallback2 ( function (data2) {
                console.log(data2)
            })
        })
    } catch(err) {

    }  
}

callbackAll()



//Promise é um objeto usado para processamento assíncrono.
// Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

//Status da Promise
//Pending
//fullfiled
//rejected

//também é possivel gerar essa promises com funções

const fazAlgo = new Promise((resolve, reject) => {        
    //throw new Error("algo deu errado ")       //levanta exceção , nesse caso paralisa tudo, pois a promise do fim esta encadeada       
    setTimeout(function() {
        resolve('first data')
    },1000)
})


const fazAlgo2 =  new Promise((resolve, reject) =>{
     
    setTimeout(function() {
        resolve('second data')
    },1000)
})

console.log(fazAlgo)

fazAlgo.then(data => console.log(data)).catch() // recebe a função como argumento para promise
                                                // o catch trata o erro

// outra forma de passar a função
fazAlgo2.then(function(data) {
    console.log(data)
})


// vc pode encadear as promises
fazAlgo.then(data => {
    console.log(data);
    return fazAlgo2})
.then(data2 => console.log(data2))
.catch(error => console.log('Errinho',error))


// executa as promises em paralelo, em vez de all pode ser race, pra quem chegar primeiro na execução

Promise.all([fazAlgo2, fazAlgo]).then(data => {
    console.log(data) 
}).catch(erro => console.log(erro))