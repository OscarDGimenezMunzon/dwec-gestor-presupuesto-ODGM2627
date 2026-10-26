// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// Variable global
let presupuesto = 0;

// FUNCIONES
function actualizarPresupuesto(numero) {
    if (numero >= 0){
        presupuesto = numero;
        return numero;
    }
    else{
        alert("Error: El número introducido es negativo.");
        return -1;
    }
        
}

function mostrarPresupuesto() {
    return "Tu presupuesto actual es de " + presupuesto + "€";
}

function CrearGasto(numero) {
    let gastoNuevo = Object.create(Gasto);
    if (numero >=0){
        gastoNuevo.valor = numero;
        return gastoNuevo;
    }
    else{
        gastoNuevo.valor = 0;
        return gastoNuevo;
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
