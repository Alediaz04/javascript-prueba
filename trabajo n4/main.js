// Cada función debe tener sus respectivas características:
// SUMA: que solicite 2 números y los sume, mostrando los números ingresados y el resultado de los mismos
// RESTA: 
// que solicite 2 números y los reste, mostrando los números ingresados y el resultado de los mismos
// MULTIPLICACIÓN: que solicite un numero a calcular y que solicite la cantidad de datos de la tabla (Por ej: el numero es 5 y la cantidad es 10, me tiene que mostrar la tabla del 5 del 1 al 10)
// DIVISIÓN: que solicite 2 números y los divida, mostrando los números ingresados y el resultado de los mismos

function suma(){
    let nro1 = parseInt(prompt("Indique un número:"));
    let nro2 = parseInt(prompt("Indique un segundo número:"));
    resu= nro1 + nro2;
    document.write(nro1+"+"+nro2+"="+resu)
}

function resta(){
    let nro1 = parseInt(prompt("Indique un número:"));
    let nro2 = parseInt(prompt("Indique un segundo número:"));
    resu= nro1 - nro2;
    document.write(nro1+"-"+nro2+"="+resu)

}

function multi(){
    let nro1 = parseInt(prompt("Indique un número:"));
    let nro2 = parseInt(prompt("Indique las tablas a visualizar:"));
    for(i=1; i<=nro2; i++){
      let res= nro1*i;
      document.write(nro1+"X"+i+"="+res+"<br>")
    };

}

function divi(){
    let nro1 = parseInt(prompt("Indique un número:"));
    let nro2 = parseInt(prompt("Indique un segundo número:"));
    resu= nro1 / nro2;
    document.write(nro1+"/"+nro2+"="+resu)

}