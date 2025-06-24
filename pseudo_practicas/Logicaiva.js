function calculoPrecio() {
    const myDiscount = 0.20;
    const IVA =0.15;

        let precio = parseFloat(document.getElementById("precio").value);
        let mensaje = document.getElementById("messagePrecio");
        
        //calculo del descuento//

        let descuento = precio * myDiscount;  //descuento//
        let precioConDescuento = precio - descuento;
        let impuesto = precioConDescuento * IVA; //iva//
        let precioFinal = precioConDescuento + impuesto;


        mensaje.textContent = `El precio con Descuento es ₡${precioConDescuento}' | 'Precio final con IVA: ₡${precioFinal}`;
    
        
        console.log (`El precio con Descuento es ₡${precioConDescuento}' | 'Precio final con IVA: ₡${precioFinal}`);

}