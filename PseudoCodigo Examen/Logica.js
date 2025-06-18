function applydiscount() {
    const StudentDiscount=0.08;
    const AdultDiscount=0.05;

let nombreUsuario =document.getElementById('nombre').value;
let Usuario = document.getElementById('TC').value;
let Edad = document.getElementById('Age').value;
let montoUsuario= parseFloat (document.getElementById('Amount').value);
let Mensaje= document.getElementById('Message');
let Descuento = 0;
let Total = 0;

if (Usuario == "Estudiante" && montoUsuario>=20000){
    Descuento = montoUsuario * StudentDiscount;
    Total = montoUsuario - Descuento;
} else{
    Descuento =montoUsuario * AdultDiscount;
    Total = montoUsuario - Descuento;  
}

Mensaje.textContent=`${nombreUsuario} tienes,${Edad} años y tienes un descuento de ${Descuento} y un total a pagar de ₡${Total}`
console.log(`${nombreUsuario} tienes,${Edad} un descuento de ${Descuento} y un total de ₡${Total}`);

}


