// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// VARIABLES GLOBALES

let presupuesto = 0;

// OBJETOS Y FUNCIONES CONSTRUCTORAS

function CrearGasto (descripcion, valor) {
    //propiedades
    this.descripcion = descripcion;
    this.valor = valor > 0 ? valor : 0;
    //métodos
    this.mostrarGasto = function(){return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;};
    this.actualizarDescripcion= function(nuevaDescripcion){this.descripcion = nuevaDescripcion};
    this.actualizarValor = function(nuevoValor){if(nuevoValor>=0) this.valor = nuevoValor};
}

// FUNCIONES
function actualizarPresupuesto(numero) {
    if (numero >= 0){
        presupuesto = numero;
        return numero;
    }
    else{
        console.log("Error: El número introducido es negativo.");
        return -1;
    }
}

function mostrarPresupuesto() {
    return "Tu presupuesto actual es de " + presupuesto + " €";
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
