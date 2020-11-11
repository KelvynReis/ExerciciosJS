const calcularPreco = idade=> {
    if(idade < 10){
        return console.log(180)
    } else if(idade < 30) {
        return console.log(150)
    } else if (idade < 60) {
        return 195
    } else {
        return console.log(230)
    }
}
calcularPreco(8)
calcularPreco(15)
calcularPreco(35)
calcularPreco(52)
calcularPreco(80)