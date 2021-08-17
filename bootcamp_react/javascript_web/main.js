function clicou() {
    document.getElementById("titulo").innerHTML = "novo titulo" // insere um novo texto no html já que o DOM permite manipular tudo
    console.log(document.getElementById("titulo"))
  //  alert("clicou nessa porra")
}

function trocapag(){
    window.open("https://documentariosonlinegratis.blogspot.com/2016/01/o-universo-history-channel-todas.html") //ABRE UMA NOVA PÁG
    //window.location.href="https://documentariosonlinegratis.blogspot.com/2016/01/o-universo-history-channel-todas.html" ABRE NA PÁG
}

function mudatexto(elemento){
   // document.getElementById(id).innerHTML = "passou o mouse!"
   elemento.innerHTML = "passou o mouse!"
}

function tiratexto(elemento){
   // document.getElementById(id).innerHTML = "tirou o mouse !!"
   elemento.innerHTML = "tirou o mouse !!"
}

function load() {
   var nome = prompt("coloca seu nome")
   alert("vai se foder " + nome)
   
}


function seleciona(elemento) {
   console.log(elemento.value)
}