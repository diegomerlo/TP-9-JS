// function test1(x,y){
//     return y-x;
// }

// console.log(test1(2,1));

// function test2(x){
//     return x*2;
// }

// console.log(test2(2));

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

llll