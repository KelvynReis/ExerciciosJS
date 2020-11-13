const calcularValor = (mes, valor) =>{
      const calculo = validar(mes, valor)

      console.log(calculo)
}
const validar = (mes, valor) =>{
    if(mes > 0 && mes < 13){
        let atraso =  mes -1
        return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
    }else{
        return console.log('Mês invalido')
    }
}
calcularValor(4, 100)