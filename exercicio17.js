const calcularReajuste = (plano, salarioAtual) =>{
    switch(plano){
        case 'A':
            return console.log(salarioAtual * 1.1)
        case 'B':
            return console.log(salarioAtual * 1.15)
        case 'C':
            return console.log(salarioAtual * 1.2)
        default:
            return console.log('Plano invalido')
    }
}

calcularReajuste('A', 1000)
calcularReajuste('B', 1000)
calcularReajuste('C', 1000)
calcularReajuste('D', 1000)