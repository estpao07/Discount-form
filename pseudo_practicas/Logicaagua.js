    function calculoAgua() {
        const tarifa = 410;
        let consumo = parseFloat(document.getElementById("Consumo").value);
        let mensaje = document.getElementById("message");


        //Calculo de consumo//

        let total = consumo * tarifa;

        mensaje.textContent = `El total a pagar es:  ₡${total}`;
        console.log( `El total a pagar es:  ₡${total}`);
     





        



    }