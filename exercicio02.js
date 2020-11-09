const triangulo = (lado1, lado2, lado3) =>{

    if(lado1 == lado2 && lado2 == lado3){
        console.log("triangulo equilatero")
    }else if(lado1 == lado2 || lado2 == lado3){
        console.log("triangulo isósceles")
    }else{
        console.log('triangulo escaleno')
    }
}

triangulo(2,2,2)
triangulo(2,3,3)
triangulo(2,3,4)