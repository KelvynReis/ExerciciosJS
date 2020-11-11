const calcular = (valor1, operacao, valor2)=>{
    switch(operacao){
        case '+':
            return console.log(valor1 + valor2)
        case '-' :
            return console.log(valor1 - valor2)
        case '/':
            return console.log(valor1 / valor2)
        case '*':
            return console.log(valor1 * valor2)
        default:
            return console.log('Operacão invalida')
    }
}

calcular(2, '+', 3)
calcular(2, '-', 3)
calcular(2, '*', 3)
calcular(2, '/', 3)
calcular(2, 'a', 3)