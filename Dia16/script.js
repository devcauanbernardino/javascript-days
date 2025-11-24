// Precedencia dos Operadores

let resultado = 3 + 4 * 5;
console.log(resultado);

let num1 = 5;
if (num1 == 5 || (num1 === 3 && num1 > 8)) {
  console.log("Resultado correto");
} else {
  console.log("Errado");
}

//---------------------------------------------------------------

// O switch e Case (se parece, mas não é igual ao if e else if)
//Dia 1 é Domingo

let dia = 5;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Seg");
    break;
  case 3:
    console.log("Ter");
    break;
  case 4:
    console.log("Qua");
    break;
  case 5:
    console.log("Qui");
    break;
  case 6:
    console.log("Sex");
    break;
  case 7:
    console.log("Sáb");
    break;
default:
    console.log('Numero inválido')
}

//---------------------------------------------------------------

//Nivel do usuário no nosso sistema

let userLevel = 'admin' //admin, editor, guest

switch (userLevel) {
    case 'admin':
        console.log('Full Access')
        break
    case 'editor':
        console.log('Editor Level')
        break
    case 'guest':
        console.log('Limited Level')
        break
    default: 
        console.log('Unknown User')
}
