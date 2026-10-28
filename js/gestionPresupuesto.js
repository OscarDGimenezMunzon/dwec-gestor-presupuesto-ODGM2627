// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// VARIABLES GLOBALES

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

// OBJETOS Y FUNCIONES CONSTRUCTORAS

function CrearGasto (descripcion, valor, fecha, ...etiquetas) {
    //propiedades
    this.descripcion = descripcion;
    this.valor = valor > 0 ? valor : 0;
    this.fecha = new Date(fecha);
    this.etiquetas = [];

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

function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto(idGasto) {
    let indiceABorrar = gastos.findIndex(gasto => gasto.id == idGasto);
    gastos.splice(indiceABorrar, 1);
}

function calcularTotalGastos() {

}

function calcularBalance() {

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
}
