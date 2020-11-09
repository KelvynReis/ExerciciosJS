let Pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

const avaliarPontuaçoes = (Pontuacoes) => {
    let pontuacoes = Pontuacoes.split(", ")
    let qtdquebraDeRecords = 0
    let piorJogo = -1
    let maior = pontuacoes[0]
    let menor = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maior) {
            maior = pontuacoes[i]
            qtdquebraDeRecords++
        }else if(pontuacoes[i] < menor) {
            menor = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return console.log(`quebra de records: ${qtdquebraDeRecords}, pior jogo: ${piorJogo}`);
}
avaliarPontuaçoes(Pontuacoes)