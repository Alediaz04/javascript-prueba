// Mostrar un producto con nombre y precio, y que al presionar el botón comprar realice lo
// siguiente:
//  Cuando haga clic en el botón tiene que estar vinculado con onclick a la siguiente funcion
//  Crear una función que se llame facturación().
//  La función tiene que recibir como parámetro el monto de un producto,
//  Debe solicitar el medio de pago:
// o C (tarjeta de crédito)
// o E (efectivo)
// o D (tarjeta de débito).
//  Debe realizar los cálculos dependiendo de:
// o Si el monto del producto es menor a $200 no se aplicará ningún descuento.
// o Si el monto a abonar es entre $200 y $400:
//  Si el medio de pago es efectivo se aplicará un descuento del 30%
//  Si se realiza con débito hacerle un descuento del 20%
//  Si se realiza con credito hacerle un descuento del 10%
// o Para montos mayores a $400, el descuento es 40% sin importar el medio de pago.
//  La función deberá mostrar:
// o El nombre del producto
// o El monto del producto
// o El medio de Pago
// o El monto final a abonar.

function facturacion(name, valor){
    let pago = parseInt(prompt("Ingresé el medio de pago:\n 1.Tarjeta de Credito \n 2.Efectivo \n 3.Tarjeta de Debito"));
    if(valor<200){
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: "+pago+"<br> Monto Final: "+valor+" (no se aplica ningun descuento)")
    }
    // mayor a 200 y menor a 400
    else if(valor >= 200 && valor <= 400 && pago===1) {
        des= valor*0.1;
        resu= valor-des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Tarjeta De Credito <br> Monto Final: "+resu);
    }
    else if(valor >= 200 && valor <= 400 && pago === 2 ){
        des= valor*0.3;
        resu= valor-des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Efectivo <br> Monto Final: "+resu);
    }
    else if(valor >= 200 && valor <= 400 && pago === 3 ){
        des= valor*0.2;
        resu= valor-des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Tarjeta de Debito <br> Monto Final: "+resu);
    }
    // Mayor a 400
    else if(valor >=400 && pago ===1){
        des= valor*0.4;    
        resu= valor - des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Tarjeta de credito <br> Monto Final: "+resu);
    }
    else if(valor >=400 && pago ===2){
        des= valor*0.4;    
        resu= valor - des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Efectivo <br> Monto Final: "+resu);
    }
    else if(valor >=400 && pago ===3){
        des= valor*0.4;    
        resu= valor - des;
        document.write("Nombre Producto: "+name+"<br> Monto del producto: "+valor+"<br> Medio De Pago: Tarjeta de Debito <br> Monto Final: "+resu);
    }
    else{
        alert("Por favor ingrese los datos correctamente");
    }
}
