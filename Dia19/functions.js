//Functions - Funções! -> Organização de blocos 

function somar(num1, num2) {
    console.log(num1 + num2)
}

//chamando a função
somar(10, 4)

function subtrair(num1, num2) {
    return num1 - num2
}

let resultado = subtrair(10, 4)
console.log(resultado)

//-----------------------------------------------------------

//Functions - Parametros Padrão
function calcularTotal(preco, desconto = 0.1) {
    let valorDesconto = preco * desconto
    let totalCompra = preco -valorDesconto
    return totalCompra
}

console.log(calcularTotal(100))

//-----------------------------------------------------------
// Functions - Parametros Rest

function listaCompras(...itens) {
    console.log(itens)
    console.log('Itens da minha lista: ' + itens)
}

listaCompras('Pao', 'Carne', 'Milho')