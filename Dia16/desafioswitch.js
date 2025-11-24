/*Criar uma solução com o "Switch" que retorne:
hora < 12: Bom dia
hora < 18: Boa tarde
hora >= 18: Boa noite
A hora dever ser coletada do sistema local
*/

let now = new Date()
let hour = now.getHours()

switch (true) {
    case hour < 12:
        console.log('Bom dia')
        break
    case hour < 18:
        console.log('Boa tarde')
        break
    case hour >= 18:
        console.log('Boa noite')
        break
    default:
        console.log('Hora inválida')
}