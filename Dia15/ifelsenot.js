// IF ELSE com o NOT Operator

let num1 = -10

if (!(num1 < 0)) { //Nega o que é verdadeiro
    console.log('Favor digitar um número positivo')
}

//---------------------------------------------------------------

let usuarioLogado = false
if (!usuarioLogado) {
    console.log('Você precisa estar logado')
} 

//---------------------------------------------------------------

let listaProdutos = []

if (listaProdutos.length) {
    console.log('A lista tem produtos')
} else {
    console.log('A lista esta vazia')
}


if (!listaProdutos.length) {
    console.log('A lista esta vazia')
}