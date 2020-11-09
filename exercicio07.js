const bhaskara = (a, b, c)=>{
    let resultados = []
    let delta = Math.pow(b , 2) - (4 * a * c)
    if(delta < 0){
        return console.log(`Delta negativo: ${delta}`)
    }
    let x1 = ( -b + Math.sqrt(delta))/ 2 * a
    let x2 = ( -b - Math.sqrt(delta))/ 2 * a
    resultados.push(x1)
    resultados.push(x2)

    console.log(`Resultado: ${resultados}`)
}

bhaskara(1,3,2)
bhaskara(3,1,2)