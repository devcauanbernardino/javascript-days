// IF e Else com Operadores Lógicos (&& E , || OU)

// Criar um site de evento online. Idade minima 18, registro = true

let idadeParticipante = 21
let registroOnline = true

if (idadeParticipante >= 18 && registroOnline) {
    console.log('Bem vindo ao evento')
} else {
    console.log('Você precisa ter no minimo 18 anos e estar registrado no evento')
}

//-----------------------------------------------------------------------------------------

//App onde o candidato vai receber um desconto se for estudante ou tiver um cupom de desconto

let estudante = true
let cupom = true

if (estudante || cupom) {
    console.log('Você tem acesso a promoção especial')
} else {
    console.log('Você precisa ter acesso a um cupom ou ser estudante para ter acesso a promoção especial')
}

//-----------------------------------------------------------------------------------------

//App para restaurante que oferece desconto para familias maiores que 4 e venham para almoçar na ter/qua

let membrosFamilia = 6
let diaDaSemana = 'ter'

if (membrosFamilia >= 4 && diaDaSemana === 'ter' || diaDaSemana === 'qua') {
    console.log('Parabéns! A sua família ganhou um desconto especial')
} else {
    console.log('Desculpe, a oferta não se aplica a sua família')
}

//-----------------------------------------------------------------------------------------

//Nesting o IF e ELSE

/* App analise de jogo
fase = true ou false
    >= 90 - Ouro
    >= 75 - Prata
    < 75 - Bronze
fase = false
    Vc tem que terminar a fase primeiro
*/ 

let faseCompleta = true
let pontuacaoSlayer = 70

if (faseCompleta) {
    if (pontuacaoSlayer >= 90) {
        console.log('Medalha de Ouro')
    } else if (pontuacaoSlayer >= 75) {
        console.log('Medalha de Prata')
    } else {
        console.log('Medalha de Bronze')
    }
} else {
    console.log('Você tem que terminar a fase primeiro')
}
