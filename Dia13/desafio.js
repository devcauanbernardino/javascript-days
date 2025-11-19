const notasFinais = (nota) => {
    if(nota >= 90) {
        console.log('Excelente!')

    } else if ( nota >= 75) {
        console.log('Muito bom!')

    } else {
        console.log('Você pode melhorar!')
        
    }
}

notasFinais(100)