function triplicar(numeroIngresado){
    return numeroIngresado*3;
}

function multiplicar(numIngresado1, numIngresado2){
    return numIngresado1*numIngresado2;
}

function división(numIngresado1, numIngresado2){
    return numIngresado1/numIngresado2;
}

function resto(numIngresado1, numIngresado2){
    return numIngresado1%numIngresado2;
}
console.log(resto(división(multiplicar(triplicar(5),12), 12),12));
