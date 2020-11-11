const calcularVenda = (codigoProduto, qtd) =>{
    switch(codigoProduto){
        case 100:
            return console.log(qtd * 3)
        case 200:
            return console.log(qtd * 4)
        case 300:
            return console.log(qtd * 5.5)
        case 400:
            return console.log(qtd * 7.5)
        case 500:
            return console.log(qtd * 3.5)
        case 600:
            return console.log(qtd * 2.8)
        default:
            return console.log("Produto nao existe")
    }
}
calcularVenda(100, 2)
calcularVenda(200, 2)
calcularVenda(300, 2)
calcularVenda(400, 2)
calcularVenda(500, 2)
calcularVenda(600, 2)
calcularVenda(700, 2)
