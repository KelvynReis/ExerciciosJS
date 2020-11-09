const ValoremDecimal = (valor) => {
    let valoremReais = `R$ ${valor.toFixed(2).toString().replace(".",",")}`
    console.log(`O resultado é: ${valoremReais}`)
}

ValoremDecimal(0.1 + 0.2)