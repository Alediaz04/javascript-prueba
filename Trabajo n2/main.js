
// 4- Realizar un programa para una tienda de autos. Si el auto a la venta es un FORD
// FIESTA, el descuento será del 5%, si es un FORD FOCUS el descuento será del 10%.
// El usuario introduce el código un artículo y el programa saca automáticamente el
// resultado.

function descuento1(valor){
    des = valor*5/100;
    res = valor - des;
    document.write( "El valor aplicando el descuento del 5% es="+res+"<br>El descuento aplicado es:"+des)
}

function descuento2(valor){
    des = valor*10/100;
    res = valor - des;
    document.write( "El valor aplicando el descuento del 10% es="+res+"<br>El descuento aplicado es:"+des);
}