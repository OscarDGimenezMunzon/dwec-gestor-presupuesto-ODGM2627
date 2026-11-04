// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// VARIABLES GLOBALES

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

// OBJETOS Y FUNCIONES CONSTRUCTORAS

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    //propiedades
    this.descripcion = descripcion;
    this.valor = valor > 0 ? valor : 0;
    this.fecha = Date.parse(fecha) ? Date.parse(fecha) : new Date();
    this.etiquetas = etiquetas;

    //métodos
    this.mostrarGasto = function () { return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`; };
    this.actualizarDescripcion = function (nuevaDescripcion) { this.descripcion = nuevaDescripcion };
    this.actualizarValor = function (nuevoValor) { if (nuevoValor >= 0) this.valor = nuevoValor };

    this.mostrarGastoCompleto = function () {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
Fecha: ${new Date(this.fecha).toLocaleString()}
Etiquetas:
- ${this.etiquetas[0]}
- ${this.etiquetas[1]}
- ${this.etiquetas[2]}
`;
    };

    this.actualizarFecha = function (fechaActualizada) {
        Date.parse(fechaActualizada) ? this.fecha = Date.parse(fechaActualizada) : "";
    };

    this.anyadirEtiquetas = function (...etiquetasNuevas) {
        for (let etiqueta of etiquetasNuevas) {
            this.etiquetas.includes(etiqueta) ? "" : this.etiquetas.push(etiqueta);
        }
    };

    this.borrarEtiquetas = function (...etiquetasBorrar) {
        for (let etiqueta of etiquetasBorrar) {
            let indice = this.etiquetas.indexOf(etiqueta);
            indice >= 0 ? this.etiquetas.splice(indice, 1) : "";
        }
    };

    this.obtenerPeriodoAgrupacion = function (periodo) {
        
        let fechaGasto = new Date(this.fecha);
        let diaGasto = fechaGasto.getDate();
        let mesGasto = fechaGasto.getMonth() + 1;
        let anyoGasto = fechaGasto.getFullYear();
        let formatoPeriodo = "";

        if (diaGasto < 10)
            diaGasto = "0" + diaGasto;

        if (mesGasto < 10)
            mesGasto = "0" + mesGasto;

        switch(periodo){
            case "dia": 
                formatoPeriodo = anyoGasto + "-" + mesGasto + "-" + diaGasto;
                break;
            case "mes":
                formatoPeriodo = anyoGasto + "-" + mesGasto;
                break;
            case "anyo":
                formatoPeriodo = anyoGasto + "";
                break
            default:
                formatoPeriodo = "Error";
        }
        return formatoPeriodo;
    }
}

// FUNCIONES
function actualizarPresupuesto(numero) {
    if (numero >= 0) {
        presupuesto = numero;
        return numero;
    }
    else {
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
    let sumaGastos = 0;
    for (let gasto of gastos) {
        sumaGastos += gasto.valor;
    }
    return sumaGastos;
}

function calcularBalance() {
    let resultado = presupuesto - calcularTotalGastos();
    return resultado;
}

function filtrarGastos(objeto) {
    console.log("Fecha desde:", objeto.fechaDesde);
console.log("Fecha de los gastos:", gastos.map(gasto => gasto.fecha));
console.log("Fecha parseada:", gastos.map(gasto => Date.parse(gasto.fecha)));

    return gastos.filter(function (gasto) {

        let filtro1 = objeto.valorMinimo !== undefined ? gasto.valor >= objeto.valorMinimo : true; // si no existe el filtro valorMinimo, devuelve true para no descartar este gasto.
        let filtro2 = objeto.valorMaximo !== undefined ? gasto.valor <= objeto.valorMaximo : true;
        let filtro3 = Date.parse(objeto.fechaDesde) !== undefined ? Date.parse(gasto.fecha) >= Date.parse(objeto.fechaDesde) : true;
        let filtro4 = Date.parse(objeto.fechaHasta) !== undefined ? Date.parse(gasto.fecha) <= Date.parse(objeto.fechaHasta) : true;
        let filtro5 = objeto.descripcionContiene !== undefined ? gasto.descripcion.toLowerCase().includes(objeto.descripcionContiene.toLowerCase()) : true;
        let filtro6 = objeto.etiquetasTiene !== undefined ?
            objeto.etiquetasTiene.some(function (etiquetaBuscada) {

                return gasto.etiquetas.some(function (etiquetaGasto) {

                    return etiquetaBuscada.toLowerCase() === etiquetaGasto.toLowerCase();
                });

            })
            : true;

        return filtro1 && filtro2 && filtro3 && filtro4 && filtro5 && filtro6;

    });
}
    

function agruparGastos() {

}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos,
}

let k = {
}

filtrarGastos(k);