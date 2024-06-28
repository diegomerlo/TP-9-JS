function contarDeA_n(contar_de_a, contar_hasta){
    let numero = contar_de_a;

    while(numero<=contar_hasta){
        console.log("-"+numero+"- ")
        numero += contar_de_a;
    }
    

}

contarDeA_n(2,10);