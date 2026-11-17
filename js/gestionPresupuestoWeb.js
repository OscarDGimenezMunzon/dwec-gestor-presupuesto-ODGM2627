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
    for (let entrie of Object.entries(agrup)) {
        datosAgrup += `<div class="agrupacion-dato">
    <span class="agrupacion-dato-clave">${entrie[0]}</span>
    <span class="agrupacion-dato-valor">${entrie[1]}</span>
  </div>
  </br>`
    };

    document.getElementById(idElemento).innerHTML = `<div class="agrupacion">
    <h1>Gastos agrupados por ${periodo}</h1>
    ${datosAgrup}
    </div>`
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb,
}