function calcularTodo(){

    let saldoAnterior= parseFloat(document.getElementById("saldoAnterior").value);
    let montoCompra= parseFloat(document.getElementById("montoCompra").value);
    let pagoAnterior = parseFloat(document.getElementById("pagoAnterior").value);

    let elementoTexto = document.getElementById("message");


    let saldoActual = (saldoAnterior+montoCompra)-pagoAnterior;

    let montoMinimo = saldoActual*0.15;
    let montoMaximo = saldoActual*0.85;

     if (pagoAnterior < montoMinimo) {
        saldoActual = saldoActual + (saldoActual * 0.12) + 200;

       
      } else{
        montoMaximo = saldoActual + (saldoActual * 0.85);

      }

      elementoTexto.textContent= `El saldo actual es: $${saldoActual} ,El pago minimo es: $${montoMinimo} ,El pago para no general interes es: $${montoMaximo}`;

}
