const fatorial = numero => {
    if(numero == 0){
        return 1
    }else{
        return numero * fatorial(numero - 1)
        
    }
    //console.log(numero)
}

console.log(fatorial(10))