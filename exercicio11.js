const Ano = ano =>{
    if(ano <=  0){
        return console.log(false)
    }else if(ano % 400 == 0){
        return console.log(true)
    }else if (ano % 100 == 0){
        return console.log(true)
    }else if (ano % 4 == 0){
        return console.log(true)
    }else{
        return console.log(false)
    }
}
Ano(0)
Ano(4)
Ano(100)
Ano(400)
Ano(800)
Ano(2020)
Ano(2021)