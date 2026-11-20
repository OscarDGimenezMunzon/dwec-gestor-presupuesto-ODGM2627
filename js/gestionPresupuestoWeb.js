import * as gestionPresupuestoLibreria from "./gestionPresupuesto.js"

function mostrarDatoEnId (idElemento, valor) {
    document.getElementById(idElemento).textContent = valor;
}

function mostrarGastoWeb (idElemento, gasto) {
    let listaEtiquetasHTML = "";
    
    for (let eti of gasto.etiquetas){
        listaEtiquetasHTML += `<span class="gasto-etiquetas-etiqueta">
        ${eti}
        </span>`;
    }
    
    document.getElementById(idElemento).innerHTML += `<div class="gasto">
  <div class="gasto-descripcion">${gasto.descripcion}</div>
  <div class="gasto-fecha">${new Date(gasto.fecha).toLocaleDateString()}</div> 
  <div class="gasto-valor">${gasto.valor}</div> 
  <div class="gasto-etiquetas">
    ${listaEtiquetasHTML}
  </div>
  </br> 
</div>`
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {

    let datosAgrup = "";
    /*  ESTRUCTURA ANTIGUA 
        for (let entrie of Object.entries(agrup)) {
            datosAgrup += `<div class="agrupacion-dato">
        <span class="agrupacion-dato-clave">${entrie[0]}</span>
        <span class="agrupacion-dato-valor">${entrie[1]}</span>
    </div>
    </br>`
        };
    */

/*  COMENTARIO ELISA NOGUERA:
    agrup es un objeto y se pueden recorrer sus propiedades con for...in

    for (let prop in agrup) {

    // prop es la propiedad y con agrup[prop] podemos acceder al valor

    }
*/

for (let prop in agrup){
        datosAgrup += `<div class="agrupacion-dato">
        <span class="agrupacion-dato-clave">${prop}</span>
        <span class="agrupacion-dato-valor">${agrup[prop]}</span>
    </div>
    </br>`
}

    document.getElementById(idElemento).innerHTML = `<div class="agrupacion">
    <h1>Gastos agrupados por ${periodo}</h1>
    ${datosAgrup}
    </div>`
}

function repintar() {
    //Mostrar el presupuesto en div#presupuesto (funciones mostrarPresupuesto y mostrarDatoEnId)
    mostrarDatoEnId("presupuesto", gestionPresupuestoLibreria.mostrarPresupuesto());
    
    //Mostrar los gastos totales en div#gastos-totales (funciones calcularTotalGastos y mostrarDatoEnId)
    mostrarDatoEnId("gastos-totales", gestionPresupuestoLibreria.calcularTotalGastos());

    //Mostrar el balance total en div#balance-total (funciones calcularBalance y mostrarDatoEnId)
    mostrarDatoEnId("balance-total", gestionPresupuestoLibreria.calcularBalance());

    //Borrar el contenido de div#listado-gastos-completo, para que el paso siguiente no duplique la información. Puedes utilizar innerHTML para borrar el contenido de dicha capa.
    document.getElementById("listado-gastos-completo").innerHTML = "";

    //Mostrar el listado completo de gastos en div#listado-gastos-completo (funciones listarGastos y mostrarGastoWeb)
    let listadoGastos = gestionPresupuestoLibreria.listarGastos();
    for (let gasto of listadoGastos){
    mostrarGastoWeb("listado-gastos-completo", gasto);
    };
}


//MANEJADOR DE EVENTOS DE BOTÓN actualizarpresupuesto
let btnActualizarPresupuesto = document.getElementById("actualizarpresupuesto");

btnActualizarPresupuesto.addEventListener("click", function(){
    let inputPresupuesto = parseInt(prompt("Introduzca un presupuesto nuevo", undefined));
    if (inputPresupuesto != isNaN)
        gestionPresupuestoLibreria.actualizarPresupuesto(inputPresupuesto);
    repintar();
});

//MANEJADOR DE EVENTOS DE BOTÓN anyadirgasto
let btnAnyadirgasto = document.getElementById("anyadirgasto");

function nuevoGastoWeb() {
    let descripcion = prompt("Introduzca la descripción del gasto.");
    let valor = parseInt(prompt("Introduzca el valor del gasto."));
    let fecha = prompt("Introduzca la fecha del gasto (yyyy-mm-dd)");
    let etiquetas = prompt("Introduzca las etiquetas (etiqueta1,etiqueta2,etiqueta3)");

    //Convertir la cadena de texto de etiquetas devuelta por prompt a un array.
    etiquetas = etiquetas.split(",");

    //Crear un nuevo gasto
    let gastoNuevo = new gestionPresupuestoLibreria.CrearGasto(descripcion, valor, fecha, etiquetas.toString());

    //Añadir el gasto a la lista
    gestionPresupuestoLibreria.anyadirGasto(gastoNuevo);

    repintar();
}

btnAnyadirgasto.addEventListener("click", nuevoGastoWeb);

/*Función EditarHandle
Esta función se utilizará como objeto manejador de eventos para editar un gasto y añadir
un botón para editar cada gasto de la lista. Será una función constructora que definirá el handleEvent.*/

function EditarHandle() {
    this.handleEvent = function() {
        let descripcion = prompt("Introduzca la descripción del gasto.", this.gasto.descripcion);
        let valor = Number(prompt("Introduzca el valor del gasto.", this.gasto.valor));
        let fecha = prompt("Introduzca la fecha del gasto (yyyy-mm-dd)", new Date(this.gasto.fecha).toLocaleDateString());
        let etiquetas = prompt("Introduzca las etiquetas (etiqueta1,etiqueta2,etiqueta3)");
        if (etiquetas != null)
            etiquetas.split(",");

        this.gasto.actualizarValor(valor);
        this.gasto.actualizarDescripcion(descripcion);
        this.gasto.actualizarFecha(fecha);
        this.gasto.anyadirEtiquetas(...etiquetas);
        repintar();
    }
}

/*Función BorrarHandle
Esta función se utilizará como objeto manejador de eventos para borrar un gasto.*/

function BorrarHandle() {
    this.handleEvent = function() {
        gestionPresupuestoLibreria.borrarGasto(this.gasto.id);
        repintar();
    }
}

/*Función BorrarEtiquetasHandle
Esta función se utilizará como objeto manejador de eventos para borrar etiquetas de un gasto. */

function BorrarEtiquetasHandle() {
    this.handleEvent = function() {
        this.gasto.borrarEtiquetas(this.etiquetas);
        repintar();
    }
}



export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
}