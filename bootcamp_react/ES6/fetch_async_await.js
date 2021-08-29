//por default eh metodo get

/*
fetch('/data.json')
.then(responseStream => responseStream.json())   // transforma o stream em json, que também retorna uma promise
.then(data =>{ 
    console.log(data)
}).catch(erro => {
    console.log('Erro: ',erro) // pega o erro de REDE
})
*/

//Async Await


const asyncTimer = () => new Promise ((resolve, reject) => {
 setTimeout(() => {
    resolve(124)
 }, 1000)
})



//promise resolvida depois da espera
const simpleFunc = async () => {
    const data = await asyncTimer() //aguarda resolução
    return data
}

simpleFunc().then(data => {
    console.log(data)
}).catch(erro => {
    console.log(erro)
})

