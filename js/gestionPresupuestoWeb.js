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

function repintar (){
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




export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
}