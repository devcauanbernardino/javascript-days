// Truthy e Falsy (IF ELSE, Loop, Ope Logicos)

// let texto = 'Cauan' //Truthy
let texto = '' // Falsy

if (texto) {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

//-------------------------------------------------------

//Operador Ternário (IF ELSE)

let idade = 19

if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}

let resultado = idade < 18 ? 'Menor de idade' : 'Maior de idade'
// console.log(resultado)

idade < 18 ? console.log('Menor de idade') : console.log('Maior de idade')