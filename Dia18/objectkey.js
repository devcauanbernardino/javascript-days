// Objects and Key Pairs 
// Arrays tem uma estrutura linear, onde cada valor é acessado por um índice numérico.
// Objetos, por outro lado, utilizam pares chave-valor, permitindo que você acesse os valores por meio de chaves descritivas.

// let ouraCauanInfo2 = [9.7, 7.53, '86%', 59, 84]

const ouraCauanInfo = {
    totalSleep: '7h53',
    timeInBed: 9.7,
    sleepEfficiency: '86%',
    restingHeartRate: {
        maxHeartRate: 81,
        minHeartRate: 59
    },
    sleepScore: 84,
    notes: [
        'Coffe',
        '30 minutes reading',
    ],
}
console.log(ouraCauanInfo)
console.log(ouraCauanInfo.sleepEfficiency)
console.log(ouraCauanInfo['totalSleep'])


// Adicionando novas chaves e valores
ouraCauanInfo.remSleep = '2h15'
console.log(ouraCauanInfo)

// Modificando valores existentes
ouraCauanInfo.sleepScore = 90
ouraCauanInfo.sleepScore++

console.log(ouraCauanInfo)

//------------------------------------------------------------

console.log(ouraCauanInfo.restingHeartRate.maxHeartRate)

//------------------------------------------------------------
//Adicionando listas ao objeto
console.log(ouraCauanInfo.notes[1])

