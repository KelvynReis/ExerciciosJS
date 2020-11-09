const jurosSimples = (capitalInical, taxa, tempo) =>{
    let resultado = capitalInical + (capitalInical * taxa * tempo)
    console.log(`Resultado: ${resultado}`);
}
const jurosCompostos =  (capitalInical, taxa, tempo) => {
    let resultado2 = capitalInical * Math.pow(1 + taxa ,tempo)
    console.log(`Resiltado é: ${resultado2.toFixed(2)}`)
}

jurosSimples(100, 10/100, 2)
jurosCompostos(100, 10/100, 2)