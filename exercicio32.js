const mediaVetor = vetor =>{
    let soma = 0

    for(let i = 0; i < vetor.length; i++) {
        soma+= vetor[i]
    }

    return  console.log( soma/vetor.length )
}
let numeros = [1, 2, 3, 4, 5]

mediaVetor(numeros)