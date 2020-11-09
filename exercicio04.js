const divisao = (dividendo, divisor) =>{
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor

    console.log(`Resultado: ${resultado}, Resto: ${resto}`)
}

divisao(11,4)