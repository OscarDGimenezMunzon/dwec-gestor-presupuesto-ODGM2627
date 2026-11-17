import * as gestionPresupuestoLibreria from './gestionPresupuesto.js';
import * as gestionPresupuestoWebLibreria from './gestionPresupuestoWeb.js';

//Actualizar el presupuesto a 1500€ (función actualizarPresupuesto)
gestionPresupuestoLibreria.actualizarPresupuesto(1500);

//Mostrar el presupuesto en el div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
gestionPresupuestoWebLibreria.mostrarDatoEnId("presupuesto", gestionPresupuestoLibreria.mostrarPresupuesto());

//Crear gastos de ejemplo (función crearGasto) (en enunciado)
let gasto1 = new gestionPresupuestoLibreria.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida");
let gasto2 = new gestionPresupuestoLibreria.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida");
let gasto3 = new gestionPresupuestoLibreria.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte");
let gasto4 = new gestionPresupuestoLibreria.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina");
let gasto5 = new gestionPresupuestoLibreria.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros");
let gasto6 = new gestionPresupuestoLibreria.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros");

//Añadir los gastos creados (función anyadirGasto)
gestionPresupuestoLibreria.anyadirGasto(gasto1);
gestionPresupuestoLibreria.anyadirGasto(gasto2);
gestionPresupuestoLibreria.anyadirGasto(gasto3);
gestionPresupuestoLibreria.anyadirGasto(gasto4);
gestionPresupuestoLibreria.anyadirGasto(gasto5);
gestionPresupuestoLibreria.anyadirGasto(gasto6);

//Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
gestionPresupuestoWebLibreria.mostrarDatoEnId("gastos-totales", gestionPresupuestoLibreria.calcularTotalGastos());

//Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
gestionPresupuestoWebLibreria.mostrarDatoEnId("balance-total", gestionPresupuestoLibreria.calcularBalance())

//Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
let listadoGastos = gestionPresupuestoLibreria.listarGastos();
for (let gasto of listadoGastos){
gestionPresupuestoWebLibreria.mostrarGastoWeb("listado-gastos-completo", gasto);
}

//Mostrar el listado de gastos realizados en septiembre de 2021 en div#listado-gastos-filtrado-1 (funciones filtrarGastos y mostrarGastoWeb)
let gastosfiltrados1 = gestionPresupuestoLibreria.filtrarGastos({fechaDesde: "2021-09-01", fechaHasta: "2021-09-30"});
for (let gasto of gastosfiltrados1){
gestionPresupuestoWebLibreria.mostrarGastoWeb("listado-gastos-filtrado-1", gasto);
}

//Mostrar el listado de gastos de más de 50€ en div#listado-gastos-filtrado-2 (funciones filtrarGastos y mostrarGastoWeb)
let gastosFiltrados2 = gestionPresupuestoLibreria.filtrarGastos({valorMinimo: 50})
for (let gasto of gastosFiltrados2){
    gestionPresupuestoWebLibreria.mostrarGastoWeb("listado-gastos-filtrado-2", gasto);
}

//Mostrar el listado de gastos de más de 200€ con etiqueta seguros en div#listado-gastos-filtrado-3 (funciones filtrarGastos y mostrarGastoWeb)
let gastosFiltrados3 = gestionPresupuestoLibreria.filtrarGastos({valorMinimo: 200, etiquetasTiene: ["seguros"]})
for (let gasto of gastosFiltrados3){
    gestionPresupuestoWebLibreria.mostrarGastoWeb("listado-gastos-filtrado-3", gasto);
}

//Mostrar el listado de gastos que tengan las etiquetas comida o transporte de menos de 50€ en div#listado-gastos-filtrado-4 (funciones filtrarGastos y mostrarGastoWeb)
let gastosFiltrados4 = gestionPresupuestoLibreria.filtrarGastos({valorMaximo: 50, etiquetasTiene: ["comida", "transporte"]})
for (let gasto of gastosFiltrados4){
    gestionPresupuestoWebLibreria.mostrarGastoWeb("listado-gastos-filtrado-4", gasto);
}

//Mostrar el total de gastos agrupados por día en div#agrupacion-dia (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let gastosDia = gestionPresupuestoLibreria.agruparGastos("dia");
gestionPresupuestoWebLibreria.mostrarGastosAgrupadosWeb("agrupacion-dia", gastosDia, "día");

//Mostrar el total de gastos agrupados por mes en div#agrupacion-mes (funciones agruparGastos y mostrarGastosAgrupadosWeb)
let gastosMes = gestionPresupuestoLibreria.agruparGastos("mes");
gestionPresupuestoWebLibreria.mostrarGastosAgrupadosWeb("agrupacion-mes", gastosMes, "mes");


//Mostrar el total de gastos agrupados por año en div#agrupacion-anyo (funciones agruparGastos y mostrarGastosAgrupadosWeb)