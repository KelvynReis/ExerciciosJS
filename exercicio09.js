const classificaAluno = nota =>{
    let notacorrigida = arrendondar(nota)
    if(notacorrigida >= 48){
        console.log(`Aprovado com nota ${notacorrigida}`);
    }else{
        console.log(`Reprovada com nota ${notacorrigida}`);
    }
}

const arrendondar = nota =>{
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}
classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)