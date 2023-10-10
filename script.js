// Obtener el campo de entrada por su ID
const input = document.getElementById('temperatura');

// Agregar un evento 'input' al campo de entrada
input.addEventListener('input', function() {
  // Obtener el valor actual del campo de entrada
  const valorInput = document.getElementById('temperatura').value;
  const contieneLetras = /[a-zA-Z]/.test(valorInput);
  if (contieneLetras) {
    // Mostrar una alerta si contiene letras
    mostrarAlertaRechazo("No se permiten letras")
    // Eliminar las letras del valor del campo de entrada
    const valorSinLetras = valorInput.replace(/[a-zA-Z]/g, '');
    // Actualizar el valor del campo de entrada sin las letras
    this.value = valorSinLetras;
  }
});

const calcular = document.querySelector(".calcular");

calcular.addEventListener("click",function(){
    if(input.value==""){
        mostrarAlertaRechazo("Ingrese una temperatura")
    }else{
        const select = document.getElementById("EscalaT");
        const valor= select.value;
        const impresion=document.querySelector(".Resultado");
        const temper = parseInt(input.value);
        if(valor=="Celsius"){
            impresion.textContent=`Temperatura en Celsius: ${temper*1}ºC`
        }else if(valor=="Fahrenheit"){
            impresion.textContent=`Temperatura en Fahrenheit: ${(temper*  (9/5)) + 32 }ºF`
        }else{
            impresion.textContent=`Temperatura en Kelvin: ${temper+ 273.15}ºK`
        }
        input.value="";
    }
})



function mostrarAlerta(mensaje) {
    Swal.fire({
        title: 'Muchas gracias',
        text: mensaje,
        icon: 'success', // Puedes cambiar el icono (success, error, warning, info, etc.)
        confirmButtonText: 'Aceptar', // Texto del boton
        customClass: {
            container: 'mi-alerta',
            title: 'mi-titulo',
            content: 'mi-contenido',
            confirmButton: 'mi-boton'
        }
    });
}

function mostrarAlertaRechazo(mensaje) {
    Swal.fire({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            container: 'mi-alerta-error',
            title: 'mi-titulo-error',
            content: 'mi-contenido-error',
            confirmButton: 'mi-boton-error'
        }
    });
}
