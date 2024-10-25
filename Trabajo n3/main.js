
// 3. Un empleado de una clínica tiene que calcular distintos valores del coseguro
// de acuerdo a su obra social según los siguientes datos:
// a. OSEP debe pagar solo un 30% del coseguro.
// b. OSDE debe pagar un recargo del 40% del coseguro.
// c. PAMI debe pagar el valor del coseguro menos el 25%.
// d. MEDICUS debe pagar el valor del coseguro más 15%.
// El valor del coseguro depende de la localidad de residencia:
// a. Maipú: $350
// b. Dorrego: $450
// c. Junín: $ 500
// Realizar un programa que realice estos cálculos en base a los datos ingresados por
// teclado.

let obraSocial = parseInt(prompt("Indica a que obra social perteneces:\n 1.OSEP \n 2.OSDE \n 3.PAMI \n 4.MEDICUS"));
let local = parseInt(prompt("Indica la localidad a la que perteneces:\n 1.Maipú \n 2.Dorrego \n 3.Junín"));

if(obraSocial == 1 && local == 1){
    valor= 350;
    des= 30;
    res= valor*des/100;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial == 1 && local == 2){
    valor= 450;
    des= 30;
    res= valor*des/100;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial == 1 && local == 3){
    valor= 500;
    des= 30;
    res= valor*des/100;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==2 && local == 1){
    valor= 350;
    rec= 40;
    res= valor *1.40;
    document.write("El total a pagar es:"+res);

}
else if(obraSocial ==2 && local == 2){
    valor= 450;
    rec= 40;
    res= valor *1.40;
    document.write("El total a pagar es:"+res);

}
else if(obraSocial ==2 && local == 3){
    valor= 500;
    rec= 40;
    res= valor *1.40;
    document.write("El total a pagar es:"+res);

}
else if(obraSocial ==3 && local == 1){
    valor= 300;
    des= valor/4;
    res= valor-des;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==3 && local == 2){
    valor= 450;
    des= valor/4;
    res= valor-des;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==3 && local == 3){
    valor= 500;
    des= valor/4;
    res= valor-des;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==4 && local == 1){
    valor= 300;
    res= valor*1.15;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==4 && local == 2){
    valor= 450;
    res= valor*1.15;
    document.write("El total a pagar es:"+res);
}
else if(obraSocial ==4 && local == 3){
    valor= 500;
    res= valor*1.15;
    document.write("El total a pagar es:"+res);
}
else{
    alert("Por favor, ingresa los datos correctamente")
}
// ejercicio 3 terminado