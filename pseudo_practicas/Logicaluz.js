function calculoLuz() {
        const tarifa = 200;
        let consumo = parseFloat(document.getElementById("ConsumoLuz").value);
        let mensaje = document.getElementById("messageLuz");

        //Calculo de consumo//

        let total = consumo * tarifa;

        mensaje.textContent = `El total a pagar es:  ₡${total}`;
        console.log( `El total a pagar es:  ₡${total}`);
}