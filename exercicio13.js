const classficaDia = numero => {
    switch (numero) {
        case 1: 
            return console.log("Fim de semana"); 
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return console.log("Dia útil");
        case 7:
            return console.log("Fim de semana");
        default:
            return console.log("Dia invalido");
    }
}

classficaDia(1)
classficaDia(2)
classficaDia(3)
classficaDia(4)
classficaDia(5)
classficaDia(6)
classficaDia(7)
classficaDia("a")
